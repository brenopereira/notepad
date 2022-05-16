import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from '../../components/atoms';

import Input from '../../components/atoms/input';
import NotesContext from '../../context/NotesContext';
import {
  Container,
  Content,
  Header,
  Navigation,
  NavigationButton,
  NavigationTitle,
  Form,
} from './styles';

const EditNote = ({navigation, route}) => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const {note} = route.params;

  const {editNote} = useContext(NotesContext);

  React.useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <Navigation>
            <NavigationButton onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={22} />
            </NavigationButton>
            <NavigationTitle>Editar nota</NavigationTitle>
          </Navigation>
        </Header>

        <Form>
          <Input
            placeholder="Digite o título da nota"
            onChangeText={value => setTitle(value)}
            value={title}
          />
          <Input
            placeholder="Digite a nota"
            onChangeText={value => setContent(value)}
            value={content}
          />

          <Button
            onPress={() => {
              editNote({id: note.id, title, content});
              navigation.navigate('Notes');
            }}
            primary={true}>
            Atualizar nota
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default EditNote;
