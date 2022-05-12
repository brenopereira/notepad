import React from 'react';

import {ButtonContainer, ButtonText} from './styles';

type ButtonProps = {
  children: string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({children, onPress}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};
