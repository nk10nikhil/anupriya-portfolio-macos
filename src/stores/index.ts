import { create } from "zustand";
import { createDockSlice, type DockSlice } from "./slices/dock";
import { createSystemSlice, type SystemSlice } from "./slices/system";
import { createUserSlice, type UserSlice } from "./slices/user";
import { createNotesSlice, type NotesSlice } from "./slices/notes";

export const useStore = create<DockSlice & SystemSlice & UserSlice & NotesSlice>(
  (...a) => ({
    ...createDockSlice(...a),
    ...createSystemSlice(...a),
    ...createUserSlice(...a),
    ...createNotesSlice(...a)
  })
);
