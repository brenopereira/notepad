import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
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

export const MapContainer = styled.View`
  height: 200px;
`;

export const Map = styled(MapView)({
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center',
});

export const NoteContent = styled.View`
  margin: 40px 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  flex-direction: column;
`;

export const NoteTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const NoteText = styled.Text`
  font-size: 14px;
  margin-top: 12px;
`;

export const NoteLocation = styled.Text`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const Actions = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const CallAction = styled.TouchableOpacity``;
