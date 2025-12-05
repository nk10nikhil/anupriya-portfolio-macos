"use client";

import { useState, useRef } from "react";
import {
  User,
  Shield,
  Wifi,
  Bluetooth,
  Bell,
  DiscIcon as Display,
  Clock,
  Keyboard,
  Mouse,
  Globe
} from "lucide-react";

import { useStore } from "~/stores";
import { music } from "~/configs";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
export default function Settings() {
  const [activeSection, setActiveSection] = useState("general");
  const [playing, setPlaying] = useState(false);
  // Zustand store state and actions
  const brightness = useStore((state) => state.brightness);
  const setBrightness = useStore((state) => state.setBrightness);
  const volume = useStore((state) => state.volume);
  const setVolume = useStore((state) => state.setVolume);
  const wifi = useStore((state) => state.wifi);
  const setWifi = useStore((state) => state.setWifi);
  const bluetooth = useStore((state) => state.bluetooth);
  const setBluetooth = useStore((state) => state.setBluetooth);
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);
  const screen = useStore((state) => state.screen);
  const setScreenMode = useStore((state) => state.setScreenMode);
  const setMusicStatus = useStore((state) => state.setMusicStatus);

  const sections = [
    { id: "general", name: "General", icon: <Globe className="w-5 h-5" /> },
    { id: "appearance", name: "Appearance", icon: <Display className="w-5 h-5" /> },
    { id: "wifi", name: "Wi-Fi", icon: <Wifi className="w-5 h-5" /> },
    { id: "bluetooth", name: "Bluetooth", icon: <Bluetooth className="w-5 h-5" /> },
    { id: "notifications", name: "Notifications", icon: <Bell className="w-5 h-5" /> },
    { id: "users", name: "Users & Groups", icon: <User className="w-5 h-5" /> },
    { id: "security", name: "Security", icon: <Shield className="w-5 h-5" /> },
    { id: "keyboard", name: "Keyboard", icon: <Keyboard className="w-5 h-5" /> },
    { id: "mouse", name: "Mouse", icon: <Mouse className="w-5 h-5" /> },
    { id: "time", name: "Date & Time", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <div className="flex h-full bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-gray-300 dark:border-neutral-800 text-black dark:text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 dark:bg-neutral-800 p-2 text-black dark:text-white">
        <div className="space-y-1">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`flex items-center px-3 py-2 rounded cursor-pointer ${
                activeSection === section.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              <div className="mr-3">{section.icon}</div>
              <span>{section.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-xl">
        {activeSection === "general" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">General</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">About</h3>
                <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg text-black dark:text-white">
                  <p className="mb-2">
                    <strong>Name:</strong> Anupriya MacOS Portfolio
                  </p>
                  <p className="mb-2">
                    <strong>Chip:</strong> Apple M4
                  </p>
                  <p>
                    <strong>Serial Number:</strong> ANUPRIYASAINI2110
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Software Update</h3>
                <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg flex items-center justify-between text-black dark:text-white">
                  <div>
                    <p className="font-medium">Your portfolio is up to date</p>
                    <p className="text-sm text-gray-600">macOS Portfolio 1.0</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Check Now
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Language & Region</h3>
                <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg text-black dark:text-white">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-medium">Preferred language</p>
                    <select className="px-3 py-1 border rounded">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Region</p>
                    <select className="px-3 py-1 border rounded">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "appearance" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Appearance & Controls</h2>
            <div className="space-y-6">
              {/* Theme Toggle */}
              <div>
                <h3 className="text-lg font-medium mb-3">Theme</h3>
                <div className="flex space-x-4">
                  <button
                    className={`border-2 p-1 rounded-lg ${theme === "light" ? "border-blue-500" : "border-gray-300"}`}
                    onClick={() => setTheme("light")}
                  >
                    <div className="bg-white w-32 h-24 rounded flex flex-col">
                      <div className="h-6 bg-gray-200 rounded-t"></div>
                      <div className="flex-1"></div>
                    </div>
                    <p className="text-center mt-2 font-medium">Light</p>
                  </button>
                  <button
                    className={`border-2 p-1 rounded-lg ${theme === "dark" ? "border-blue-500" : "border-gray-300"}`}
                    onClick={() => setTheme("dark")}
                  >
                    <div className="bg-gray-800 w-32 h-24 rounded flex flex-col">
                      <div className="h-6 bg-gray-700 rounded-t"></div>
                      <div className="flex-1"></div>
                    </div>
                    <p className="text-center mt-2 font-medium">Dark</p>
                  </button>
                  <button
                    className={`border-2 p-1 rounded-lg ${theme === "system" ? "border-blue-500" : "border-gray-300"}`}
                    onClick={() => setTheme("system")}
                  >
                    <div className="bg-gradient-to-b from-white to-gray-800 w-32 h-24 rounded flex flex-col">
                      <div className="h-6 bg-gradient-to-b from-gray-200 to-gray-700 rounded-t"></div>
                      <div className="flex-1"></div>
                    </div>
                    <p className="text-center mt-2 font-medium">Auto</p>
                  </button>
                </div>
              </div>

              {/* Control Center Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium mb-2">Connectivity</h3>
                  <div className="flex items-center space-x-3">
                    <button
                      className={`cc-btn ${wifi ? "cc-btn-active" : ""}`}
                      onClick={() => setWifi(!wifi)}
                    >
                      <Wifi className="w-5 h-5" />
                    </button>
                    <span>Wi-Fi: {wifi ? "On" : "Off"}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      className={`cc-btn ${bluetooth ? "cc-btn-active" : ""}`}
                      onClick={() => setBluetooth(!bluetooth)}
                    >
                      <Bluetooth className="w-5 h-5" />
                    </button>
                    <span>Bluetooth: {bluetooth ? "On" : "Off"}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium mb-2">Display & Mode</h3>
                  <div className="flex items-center space-x-3">
                    <button
                      className={`cc-btn ${theme === "dark" ? "cc-btn-active" : ""}`}
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                      {theme === "dark" ? (
                        <span className="i-ion:moon text-base" />
                      ) : (
                        <span className="i-ion:sunny text-base" />
                      )}
                    </button>
                    <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      className={`cc-btn ${screen === "fullscreen" ? "cc-btn-active" : ""}`}
                      onClick={() =>
                        setScreenMode(screen === "fullscreen" ? "default" : "fullscreen")
                      }
                    >
                      {screen === "fullscreen" ? (
                        <span className="i-bi:fullscreen-exit text-base" />
                      ) : (
                        <span className="i-bi:fullscreen text-base" />
                      )}
                    </button>
                    <span>
                      {screen === "fullscreen" ? "Exit Fullscreen" : "Enter Fullscreen"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Display Brightness</h3>
                  <Slider
                    min={1}
                    max={100}
                    value={brightness}
                    tooltip={false}
                    orientation="horizontal"
                    onChange={(v: number) => setBrightness(v)}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Sound Volume</h3>
                  <Slider
                    min={1}
                    max={100}
                    value={volume}
                    tooltip={false}
                    orientation="horizontal"
                    onChange={(v: number) => setVolume(v)}
                  />
                </div>
              </div>

              {/* Music Info & Controls */}
              <div className="flex items-center space-x-4 mt-6 p-4 bg-gray-100 dark:bg-neutral-800 rounded-lg">
                <img className="w-16 h-16 rounded-lg" src={music.cover} alt="cover art" />
                <div className="flex-1">
                  <div className="font-medium">{music.title}</div>
                  <div className="cc-text">{music.artist}</div>
                </div>
                {playing ? (
                  <span
                    className="i-bi:pause-fill text-2xl cursor-pointer"
                    onClick={() => {
                      setPlaying(false);
                      setMusicStatus("paused");
                    }}
                  />
                ) : (
                  <span
                    className="i-bi:play-fill text-2xl cursor-pointer"
                    onClick={() => {
                      setPlaying(true);
                      setMusicStatus("playing");
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {activeSection !== "general" && activeSection !== "appearance" && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">
                {sections.find((s) => s.id === activeSection)?.name}
              </h2>
              <p className="text-gray-500">This section is under development</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
