import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Content = styled.View`
  padding: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationButton = styled.TouchableOpacity`
  margin-right: 12px;
`;

export const NavigationTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const Form = styled.View`
  margin-top: 20px;
`;
