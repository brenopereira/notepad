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

const CreateNote = ({navigation}) => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const {addNewNote} = useContext(NotesContext);

  return (
    <Container>
      <Content>
        <Header>
          <Navigation>
            <NavigationButton onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={22} />
            </NavigationButton>
            <NavigationTitle>Minha nota</NavigationTitle>
          </Navigation>
        </Header>

        <Form>
          <Input
            placeholder="Digite o título da nota"
            onChangeText={value => setTitle(value)}
          />
          <Input
            placeholder="Digite a nota"
            onChangeText={value => setContent(value)}
          />

          <Button
            onPress={() => {
              addNewNote({title, content});
              navigation.navigate('Notes');
            }}
            primary={true}>
            Salvar nota
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateNote;
