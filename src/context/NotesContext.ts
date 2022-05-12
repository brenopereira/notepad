import {createContext} from 'react';

type NoteProps = {
  title: string;
  content: string;
  location: string;
};

type NotesContextProps = {
  notes: NoteProps[];
};

export const NotesContext = createContext<NotesContextProps>({
  notes: [],
});
