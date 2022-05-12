import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Header, Logo} from './styles';

const Notes = () => {
  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Content>
        <Header>
          <Logo>NotePad</Logo>
        </Header>
        <View>
          <TouchableOpacity>
            <Text>Título</Text>
            <Text>Descrição do conteúdo em forma de resumo.</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default Notes;
