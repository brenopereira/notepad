import React, {useContext} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import NotesContext, {Note} from '../../context/NotesContext';

import {
  CallAction,
  Container,
  Content,
  EmptyNotes,
  Header,
  Logo,
  Main,
  NoteContent,
  NotesList,
  NoteTitle,
} from './styles';

const Notes = ({navigation}: any) => {
  const {notes} = useContext(NotesContext);

  React.useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Content>
        <Header>
          <Logo>NotePad</Logo>
          <CallAction onPress={() => navigation.navigate('CreateNote')}>
            <Icon name="plus" size={26} />
          </CallAction>
        </Header>
        <Main>
          {notes.length ? (
            notes.map((note: Note, key) => (
              <NotesList key={key}>
                <CallAction
                  onPress={() => navigation.navigate('NoteDetail', {note})}>
                  <NoteTitle>{note.title}</NoteTitle>
                  <NoteContent>{note.content}</NoteContent>
                </CallAction>
              </NotesList>
            ))
          ) : (
            <EmptyNotes>Nenhuma nota foi criada ainda.</EmptyNotes>
          )}
        </Main>
      </Content>
    </Container>
  );
};

export default Notes;
