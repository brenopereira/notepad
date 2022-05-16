import React from 'react';

import {ButtonContainer, ButtonText} from './styles';

type ButtonProps = {
  children: string;
  primary?: boolean;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  primary = false,
}) => {
  return (
    <ButtonContainer onPress={onPress} primary={primary}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};
