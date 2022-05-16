import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocationContext from './LocationContext';

export type Note = {
  id?: number;
  title?: string;
  content?: string;
  location?: {
    latitude: number | null;
    longitude: number | null;
  };
};

const NotesContext = React.createContext({notes: []});

type Props = {
  children: React.ReactNode;
};

export const NotesProvider: React.FC<Props> = ({children}) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const {location} = useContext(LocationContext);

  const deleteNote = ({id}) => {
    const filterNotesDatabase = notes.filter(note => note.id !== id);

    setNotes(filterNotesDatabase);
  };

  const editNote = ({id, title, content}) => {
    const updateNote = notes.map(note => {
      if (note.id === id) {
        return {
          ...note,
          title,
          content,
        };
      } else {
        return note;
      }
    });

    setNotes(updateNote);
  };

  const addNewNote = ({title, content}) => {
    setNotes([
      ...notes,
      {
        id: new Date().getTime(),
        title,
        content,
        location,
      },
    ]);
  };

  const updateDatabase = async () => {
    return await AsyncStorage.setItem('@notepad/notes', JSON.stringify(notes));
  };

  const getNotesFromDatabase = async () => {
    try {
      const database = await AsyncStorage.getItem('@notepad/notes');

      return database != null ? JSON.parse(database) : [];
    } catch (e) {}
  };

  useEffect(() => {
    getNotesFromDatabase().then(data => {
      setNotes(data || []);
    });
  }, []);

  useEffect(() => {
    updateDatabase();
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNewNote,
        deleteNote,
        editNote,
      }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
