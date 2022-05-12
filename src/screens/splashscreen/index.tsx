import React from 'react';
import {StatusBar, View} from 'react-native';
import {Button} from '../../components/atoms';
import {
  Container,
  Content,
  TextPrimary,
  TextSecondary,
  TextTertiary,
} from './styles';

const Splashscreen = ({navigation}: any) => {
  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Content>
        <View>
          <TextPrimary>Note</TextPrimary>
          <TextSecondary>Pad</TextSecondary>
        </View>
        <TextTertiary>
          Um aplicativo para você salvar as suas notas dem aneira rápida e
          fácil.
        </TextTertiary>
        <Button onPress={() => navigation.navigate('Notes')}>
          Criar uma nota
        </Button>
      </Content>
    </Container>
  );
};

export default Splashscreen;
