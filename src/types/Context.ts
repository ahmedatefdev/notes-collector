import { Note } from "./Note";

export type NoteFunctionsProvider = {
  // EditNoteBody: (title: string | undefined, newBody: string) => boolean;
  DeleteNote: (oldNote: Note) => boolean;
  RenameNote: (oldNote: Note, newTitle: string) => boolean;
  ChangeCurrentNote: (note: Note) => void;
};
