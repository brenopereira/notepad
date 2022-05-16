import React from 'react';

import {InputContainer, InputBase} from './styles';

type Props = {
  placeholder: string;
  onChangeText: (value: string) => void;
  value: string;
};

const Input: React.FC<Props> = ({placeholder, onChangeText, value}) => {
  return (
    <InputContainer>
      <InputBase
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </InputContainer>
  );
};

export default Input;
