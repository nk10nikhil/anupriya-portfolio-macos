import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Wallpaper {
  dark: string;
  light: string;
}

export interface SettingsState {
  wallpaper: Wallpaper | null;
  screen: "fullscreen" | "default";
  brightness: number;
  volume: number;
  music_status: "playing" | "paused";
  activeApp: { name: string } | null;
  zIndex: number;
  desktop: {
    view: "vertical" | "horizontal";
    sort: "date" | "name";
  };
  language: string;
  region: string;
  wifi: boolean;
  bluetooth: boolean;
  battery: number;
  accessibility: boolean;
  theme: "system" | "dark" | "light";
}

const initialState: SettingsState = {
  wallpaper: null,
  screen: "default",
  brightness: 100,
  volume: 50,
  music_status: "paused",
  activeApp: null,
  zIndex: 1024,
  desktop: {
    view: "vertical",
    sort: "date"
  },
  language: "English (US)",
  region: "United States",
  wifi: true,
  bluetooth: false,
  battery: 100,
  accessibility: false,
  theme: "system"
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setWallpaper: (state, action: PayloadAction<Wallpaper>) => {
      state.wallpaper = action.payload;
    },
    setScreenMode: (state, action: PayloadAction<"fullscreen" | "default">) => {
      state.screen = action.payload;
    },
    setBrightness: (state, action: PayloadAction<number>) => {
      state.brightness = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setMusicStatus: (state, action: PayloadAction<"playing" | "paused">) => {
      state.music_status = action.payload;
    },
    setActiveApp: (state, action: PayloadAction<{ name: string } | null>) => {
      state.activeApp = action.payload;
    },
    setZIndex: (state, action: PayloadAction<number>) => {
      state.zIndex = action.payload;
    },
    setViewOption: (state, action: PayloadAction<"vertical" | "horizontal">) => {
      state.desktop.view = action.payload;
    },
    setSortOption: (state, action: PayloadAction<"date" | "name">) => {
      state.desktop.sort = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    setWifi: (state, action: PayloadAction<boolean>) => {
      state.wifi = action.payload;
    },
    setBluetooth: (state, action: PayloadAction<boolean>) => {
      state.bluetooth = action.payload;
    },
    setBattery: (state, action: PayloadAction<number>) => {
      state.battery = action.payload;
    },
    setAccessibility: (state, action: PayloadAction<boolean>) => {
      state.accessibility = action.payload;
    },
    setTheme: (state, action: PayloadAction<"system" | "dark" | "light">) => {
      state.theme = action.payload;
    }
  }
});

export const {
  setWallpaper,
  setScreenMode,
  setBrightness,
  setVolume,
  setMusicStatus,
  setActiveApp,
  setZIndex,
  setViewOption,
  setSortOption,
  setLanguage,
  setRegion,
  setWifi,
  setBluetooth,
  setBattery,
  setAccessibility,
  setTheme
} = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
