import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";
import Spotify from "~/components/apps/Spotify";
import Siri from "~/components/apps/Siri";
import Calculator from "~/components/calculator";
import { INotes } from "~/components/inotes";
import Contact from "~/components/contact";
import { AudioProvider } from "~/context/AudioContext";

import Settings from "~/components/apps/settings";
const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    width: 860,
    height: 500,
    show: true,
    y: -40,
    img: "img/icons/bear.png",
    content: <Bear />
  },
  {
    id: "typora",
    title: "Typora",
    desktop: true,
    width: 600,
    height: 580,
    y: -20,
    img: "img/icons/typora.png",
    content: <Typora />
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    x: -20,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    width: 900,
    height: 600,
    x: 80,
    y: -30,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    img: "img/icons/facetime.png",
    width: 500 * 1.7,
    height: 500 + appBarHeight,
    minWidth: 350 * 1.7,
    minHeight: 350 + appBarHeight,
    aspectRatio: 1.7,
    x: -80,
    y: 20,
    content: <FaceTime />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/anupriyasaini21"
  },
  {
    id: "spotify",
    title: "Spotify",
    desktop: true,
    width: 300,
    height: 380,
    img: "img/icons/Spotify.png",
    content: <Spotify />
  },
  {
    id: "siri",
    title: "Siri",
    desktop: true,
    width: 700,
    height: 480,
    img: "img/icons/Siri.png",
    content: (
      <AudioProvider>
        <Siri />
      </AudioProvider>
    )
  },
  {
    id: "calculator",
    title: "Calculator",
    desktop: true,
    width: 280,
    height: 500,
    img: "img/icons/calculator.png",
    content: <Calculator />
  },
  {
    id: "inotes",
    title: "iNotes",
    desktop: true,
    width: 400,
    height: 600,
    img: "img/icons/notes.png",
    content: <INotes />
  },
  {
    id: "contact",
    title: "Contact",
    desktop: true,
    width: 800,
    height: 600,
    img: "img/icons/contact.png",
    content: <Contact />
  },
  {
    id: "settings",
    title: "Settings",
    desktop: true,
    width: 900,
    height: 600,
    img: "img/icons/settings.png",
    content: <Settings />
  }
];

export default apps;
