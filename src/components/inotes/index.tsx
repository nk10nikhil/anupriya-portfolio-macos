import { useStore } from "~/stores";
import { IconNotes, IconPlus } from "@tabler/icons-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import type { INote } from "~/stores/slices/notes";

export function INotes() {
  const { notes, addNewNote, updateNote, deleteNote, loadNotes } = useStore();
  const [tab, setTab] = useState<string>("");
  const activeNote = notes.find((note) => note.id === tab);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [mode, setMode] = useState<"readonly" | "edit">("readonly");

  useEffect(() => {
    if (textareaRef.current instanceof HTMLTextAreaElement) {
      textareaRef.current.focus();
      const length = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(length, length);
    }
  }, [tab]);

  useEffect(() => {
    const localNotes = localStorage.getItem("iNotes");
    const parseNotes: INote[] | null = JSON.parse(localNotes || "null");
    if (parseNotes) {
      loadNotes(parseNotes);
    }
  }, []);

  const onDelete = (id: string) => {
    deleteNote(id);
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("iNotes", JSON.stringify(updatedNotes));
    setTab("");
    setMode("readonly");
  };

  const onNewNote = () => {
    const id = crypto.randomUUID();
    const newNote = {
      id,
      content: "Hurray! This will be added to Anupriya's new note",
      updatedAt: new Date().toISOString()
    };
    addNewNote(newNote);
    const updatedNotes = [newNote, ...notes];
    localStorage.setItem("iNotes", JSON.stringify(updatedNotes));
    setTab(id);
    setMode("edit");
  };

  const onEdit = () => {
    if (textareaRef.current instanceof HTMLTextAreaElement) {
      textareaRef.current.focus();
      const length = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(length, length);
    }
    if (mode === "edit") return;
    setMode("edit");
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNote({
      id: tab,
      content: e.target.value,
      updatedAt: new Date().toISOString()
    });
    const updatedNotes = notes.map((note) => {
      if (note.id === tab) {
        return {
          id: tab,
          content: e.target.value,
          updatedAt: new Date().toISOString()
        };
      } else return note;
    });
    localStorage.setItem("iNotes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="grid h-full grid-cols-[250px,1fr] bg-gray-50 dark:bg-gray-800">
      <div className="max-h-full overflow-y-auto bg-gray-100 dark:bg-gray-700 p-4 border-r border-gray-300 dark:border-gray-600 flex flex-col">
        <h3 className="text-sm font-medium text-[#9a9a9a] mb-2">
          On Anupriya&apos;s iCloud
        </h3>
        <div className="flex-1 space-y-2 overflow-y-auto">
          {notes.map((note) => (
            <button
              key={note.id}
              onClick={() => {
                setTab(note.id);
                setMode("readonly");
              }}
              className={`grid w-full grid-cols-[auto,1fr] gap-2 rounded-md px-2 py-1 ${tab === note.id ? "bg-white dark:bg-gray-600" : "hover:bg-white/70 dark:hover:bg-gray-600/50"}`}
            >
              <div className="size-6">
                <IconNotes
                  stroke={2}
                  className="size-full translate-y-[2px] text-emerald-500"
                />
              </div>
              <div className="flex flex-col text-start">
                <h2 className="line-clamp-1 text-sm font-medium">
                  {note.content.trim().length > 2
                    ? note.content.trim().length <= 40
                      ? note.content.trim()
                      : note.content.trim().slice(0, 37) + "..."
                    : "My New Note"}
                </h2>
                <h2 className="text-[10px]">
                  {new Date(note.updatedAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit"
                  })}
                </h2>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600">
          <button
            onClick={onNewNote}
            className="flex w-full items-center gap-2 rounded-md bg-white dark:bg-gray-600 px-4 py-1 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-500"
          >
            <IconPlus className="size-4" stroke={2} />
            <span>Write a new note</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col h-full overflow-y-auto p-4 bg-white dark:bg-gray-800">
        {activeNote ? (
          <>
            <div className="flex items-center justify-end gap-3 mb-2">
              <button
                onClick={onDelete.bind(null, activeNote.id)}
                type="button"
                title="delete"
                className="hover:text-red-500"
              >
                <FaRegTrashCan />
              </button>
              <button
                onClick={onEdit}
                type="button"
                title="edit"
                className="hover:text-blue-500"
              >
                <FiEdit />
              </button>
            </div>
            <textarea
              title="Double Click To Edit"
              onDoubleClick={onEdit}
              readOnly={mode === "readonly"}
              ref={textareaRef}
              className="flex-1 w-full resize-none bg-inherit focus:outline-none"
              value={activeNote.content}
              onChange={handleChange}
            />
          </>
        ) : (
          <div className="flex size-full items-center justify-center">
            <button
              onClick={onNewNote}
              className="flex items-center gap-2 rounded-md bg-gray-100 dark:bg-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <IconPlus className="size-4" stroke={2} />
              <span>Write a new note</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
