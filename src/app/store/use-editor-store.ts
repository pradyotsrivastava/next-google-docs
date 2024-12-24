import { create } from "zustand";
import { Editor } from "@tiptap/react";
// import { EditorState } from "@tiptap/pm/state";

interface EditorState {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
