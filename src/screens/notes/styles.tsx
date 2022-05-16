import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Content = styled.View`
  padding: 30px;
`;

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Logo = styled.Text`
  font-weight: bold;
  font-family: 'Montserrat-BlackItalic';
  color: #5b78ff;
  font-size: 28px;
`;

export const Main = styled.View``;

export const EmptyNotes = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 40px;
`;

export const NotesList = styled.View({
  borderRadius: 8,
  backgroundColor: '#f1f1f1',
  padding: 14,
  marginBottom: 12,
});

export const NoteTitle = styled.Text({
  fontWeight: 'bold',
  marginBottom: 8,
});

export const NoteContent = styled.Text({});

export const CallAction = styled.TouchableOpacity``;
