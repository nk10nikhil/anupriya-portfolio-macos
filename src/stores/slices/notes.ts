import type { StateCreator } from "zustand";

export interface INote {
  id: string;
  content: string;
  updatedAt: string;
}

export interface NotesSlice {
  notes: INote[];
  addNewNote: (note: INote) => void;
  updateNote: (note: INote) => void;
  deleteNote: (id: string) => void;
  loadNotes: (notes: INote[]) => void;
}

export const createNotesSlice: StateCreator<NotesSlice> = (set) => ({
  notes: [
    {
      id: crypto.randomUUID(),
      content: "This is demo note",
      updatedAt: new Date().toISOString()
    }
  ],
  addNewNote: (note) =>
    set((state) => ({
      notes: [note, ...state.notes]
    })),
  updateNote: (note) =>
    set((state) => ({
      notes: state.notes.map((n) =>
        n.id === note.id ? { ...n, content: note.content, updatedAt: note.updatedAt } : n
      )
    })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id)
    })),
  loadNotes: (notes) => set(() => ({ notes }))
});
