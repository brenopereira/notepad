import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #5b78ff;
`;

export const Content = styled.View`
  padding: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextPrimary = styled.Text`
  font-weight: bold;
  font-family: 'Montserrat-BlackItalic';
  color: #ffffff;
  font-size: 22px;
`;

export const TextSecondary = styled.Text`
  font-weight: bold;
  font-family: 'Montserrat-BlackItalic';
  color: #ffffff;
  font-size: 22px;
`;

export const TextTertiary = styled.Text`
  color: #ffffff;
  font-size: 18px;
  margin-top: 20px;
  padding-right: 100px;
  font-weight: bold;
`;
