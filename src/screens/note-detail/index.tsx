import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  Map,
  MapContainer,
  NavigationButton,
  NoteContent,
  NavigationTitle,
  NoteLocation,
  Navigation,
  NoteTitle,
  NoteText,
  Actions,
  CallAction,
} from './styles';
import NotesContext from '../../context/NotesContext';

type NoteDetailProps = {
  navigation?: any;
  note: {
    id: string;
    title: string;
    content: string;
  };
};

const NoteDetail: React.FC<NoteDetailProps> = ({route, navigation}) => {
  const {note} = route.params;
  const {deleteNote} = useContext(NotesContext);

  return (
    <Container>
      <Header>
        <Navigation>
          <NavigationButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={22} />
          </NavigationButton>
          <NavigationTitle>Minha nota</NavigationTitle>
        </Navigation>
        <Actions>
          <CallAction onPress={() => navigation.navigate('EditNote', {note})}>
            <Icon name="edit" size={26} />
          </CallAction>
          <CallAction
            onPress={() => {
              deleteNote({id: note.id});
              navigation.navigate('Notes');
            }}>
            <Icon name="trash" size={26} />
          </CallAction>
        </Actions>
      </Header>

      <NoteContent>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteText>{note.content || ''}</NoteText>
      </NoteContent>

      <NoteLocation>Você registrou essa nota em:</NoteLocation>
      <MapContainer>
        <Map
          region={{
            longitude: note.location.longitude,
            latitude: note.location.latitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              longitude: note.location.longitude,
              latitude: note.location.latitude,
            }}
          />
        </Map>
      </MapContainer>
    </Container>
  );
};

export default NoteDetail;
