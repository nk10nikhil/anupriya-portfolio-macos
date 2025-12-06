import React, { useRef, useState, useEffect, forwardRef } from "react";
import { format } from "date-fns";
import { isFullScreen } from "~/utils";
import { music } from "~/configs";
import type { MacActions } from "~/types";
import { useAudio, useInterval, useWindowSize } from "react-use";
import { useStore } from "~/stores";
import AppleMenu from "./AppleMenu";
import WifiMenu from "./WifiMenu";
import ControlCenterMenu from "./ControlCenterMenu";
import Battery from "./Battery";

interface TopBarItemProps {
  hideOnMobile?: boolean;
  forceHover?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const TopBarItem = forwardRef(
  (props: TopBarItemProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const hide = props.hideOnMobile ? "hidden sm:inline-flex" : "inline-flex";
    const bg = props.forceHover
      ? "bg-gray-100/30 dark:bg-gray-400/40"
      : "hover:(bg-gray-100/30 dark:bg-gray-400/40)";

    return (
      <div
        ref={ref}
        className={`hstack space-x-1 h-6 px-1 cursor-default rounded ${hide} ${bg} ${
          props.className || ""
        }`}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
      >
        {props.children}
      </div>
    );
  }
);

const CCMIcon = ({ size }: { size: number }) => {
  return (
    <svg
      viewBox="0 0 29 29"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M7.5,13h14a5.5,5.5,0,0,0,0-11H7.5a5.5,5.5,0,0,0,0,11Zm0-9h14a3.5,3.5,0,0,1,0,7H7.5a3.5,3.5,0,0,1,0-7Zm0,6A2.5,2.5,0,1,0,5,7.5,2.5,2.5,0,0,0,7.5,10Zm14,6H7.5a5.5,5.5,0,0,0,0,11h14a5.5,5.5,0,0,0,0-11Zm1.43439,8a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,22.93439,24Z" />
    </svg>
  );
};

interface TopBarProps extends MacActions {
  title: string;
  setSpotlightBtnRef: (value: React.RefObject<HTMLDivElement>) => void;
  hide: boolean;
  toggleSpotlight: () => void;
}

interface TopBarState {
  date: Date;
  showControlCenter: boolean;
  showWifiMenu: boolean;
  showAppleMenu: boolean;
}

const TopBar = (props: TopBarProps) => {
  const appleBtnRef = useRef<HTMLDivElement>(null);
  const controlCenterBtnRef = useRef<HTMLDivElement>(null);
  const wifiBtnRef = useRef<HTMLDivElement>(null);
  const spotlightBtnRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<TopBarState>({
    date: new Date(),
    showControlCenter: false,
    showWifiMenu: false,
    showAppleMenu: false
  });

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [audio, audioState, controls, audioRef] = useAudio({
    src: music.audio,
    loop: true
  });
  const { winWidth, winHeight } = useWindowSize();

  const { volume, wifi } = useStore((state) => ({
    volume: state.volume,
    wifi: state.wifi
  }));
  const { toggleFullScreen, setVolume, setBrightness } = useStore((state) => ({
    toggleFullScreen: state.toggleFullScreen,
    setVolume: state.setVolume,
    setBrightness: state.setBrightness
  }));

  useInterval(() => {
    setState({
      ...state,
      date: new Date()
    });
  }, 60 * 1000);

  useEffect(() => {
    props.setSpotlightBtnRef(spotlightBtnRef);
    controls.volume(volume / 100);
  }, []);

  useEffect(() => {
    const isFull = isFullScreen();
    toggleFullScreen(isFull);
  }, [winWidth, winHeight]);

  const setAudioVolume = (value: number): void => {
    setVolume(value);
    controls.volume(value / 100);
  };

  const setSiteBrightness = (value: number): void => {
    setBrightness(value);
  };

  const toggleControlCenter = (): void => {
    setState({
      ...state,
      showControlCenter: !state.showControlCenter
    });
  };

  const toggleAppleMenu = (): void => {
    setState({
      ...state,
      showAppleMenu: !state.showAppleMenu
    });
  };

  const toggleWifiMenu = (): void => {
    setState({
      ...state,
      showWifiMenu: !state.showWifiMenu
    });
  };

  const logout = (): void => {
    controls.pause();
    props.setLogin(false);
  };

  const shut = (e: React.MouseEvent<HTMLLIElement>): void => {
    controls.pause();
    props.shutMac(e);
  };

  const restart = (e: React.MouseEvent<HTMLLIElement>): void => {
    controls.pause();
    props.restartMac(e);
  };

  const sleep = (e: React.MouseEvent<HTMLLIElement>): void => {
    controls.pause();
    props.sleepMac(e);
  };

  return (
    <div
      className={`w-full h-7 px-2 fixed top-0 hstack justify-between ${
        props.hide ? "z-0" : "z-20"
      } text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition`}
    >
      <div className="hstack space-x-1">
        <TopBarItem
          className="px-2"
          forceHover={state.showAppleMenu}
          onClick={toggleAppleMenu}
          ref={appleBtnRef}
        >
          <span className="i-ri:apple-fill text-base" />
        </TopBarItem>

        {/* Desktop Menu Items - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-2">
          <TopBarItem className="font-semibold px-2">{props.title}</TopBarItem>
          <TopBarItem className="px-2">File</TopBarItem>
          <TopBarItem className="px-2">Edit</TopBarItem>
          <TopBarItem className="px-2">View</TopBarItem>
          <TopBarItem className="px-2">Go</TopBarItem>
          <TopBarItem className="px-2">Window</TopBarItem>
          <TopBarItem className="px-2">Help</TopBarItem>
        </div>

        {/* Mobile Title - Shown only on Mobile */}
        <TopBarItem
          className="font-semibold px-2 md:hidden"
          onMouseEnter={() => {
            if (state.showAppleMenu) toggleAppleMenu();
          }}
        >
          {props.title}
        </TopBarItem>
      </div>

      {/* Notch - Hidden on Mobile */}
      <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2">
        <div className="relative">
          <img src="/assets/icons/Сhelka.svg" alt="notch" className="w-36 h-auto" />
          <span className="absolute left-2/3 top-2 size-1.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse" />
        </div>
      </div>

      {/* Open this when clicking on Apple logo */}
      {state.showAppleMenu && (
        <AppleMenu
          logout={logout}
          shut={shut}
          restart={restart}
          sleep={sleep}
          toggleAppleMenu={toggleAppleMenu}
          btnRef={appleBtnRef}
        />
      )}

      <div className="hstack flex-row justify-end space-x-4">
        <TopBarItem hideOnMobile={true}>
          <Battery />
        </TopBarItem>
        <TopBarItem
          hideOnMobile={true}
          forceHover={state.showWifiMenu}
          onClick={toggleWifiMenu}
          ref={wifiBtnRef}
        >
          {wifi ? (
            <span className="i-material-symbols:wifi text-lg" />
          ) : (
            <span className="i-material-symbols:wifi-off text-lg" />
          )}
        </TopBarItem>
        <TopBarItem ref={spotlightBtnRef} onClick={props.toggleSpotlight}>
          <span className="i-bx:search text-[17px]" />
        </TopBarItem>
        <TopBarItem
          forceHover={state.showControlCenter}
          onClick={toggleControlCenter}
          ref={controlCenterBtnRef}
        >
          <CCMIcon size={16} />
        </TopBarItem>

        {/* Open this when clicking on Wifi button */}
        {state.showWifiMenu && (
          <WifiMenu toggleWifiMenu={toggleWifiMenu} btnRef={wifiBtnRef} />
        )}

        {/* Open this when clicking on Control Center button */}
        {state.showControlCenter && (
          <ControlCenterMenu
            playing={audioState.playing}
            toggleAudio={() => {
              if (audioState.playing) {
                controls.pause();
              } else {
                controls.play();
              }
            }}
            setVolume={setAudioVolume}
            setBrightness={setSiteBrightness}
            toggleControlCenter={toggleControlCenter}
            btnRef={controlCenterBtnRef}
          />
        )}

        <TopBarItem>
          <span>{format(state.date, "eee MMM d")}</span>
          <span>{format(state.date, "h:mm aa")}</span>
        </TopBarItem>
      </div>
    </div>
  );
};

export default TopBar;