import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  border: 1px solid #ffffff;
  padding: 18px;

  background: ${(props: {primary?: boolean; secondary?: boolean}) =>
    props.primary ? '#5b78ff' : 'transparent'};
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;
