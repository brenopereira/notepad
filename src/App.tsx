import React from 'react';
import {Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LocationContext} from './context/LocationContext';
import Splashscreen from './screens/splashscreen';
import Notes from './screens/notes';

const Stack = createNativeStackNavigator();

const App = () => {
  const [latitude, setLatitude] = React.useState<null | number>(null);
  const [longitude, setLongitude] = React.useState<null | number>(null);

  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  React.useEffect(() => {
    if (latitude && longitude) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=CHAVE`,
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => console.log(err));
    }
  }, [latitude, longitude]);

  return (
    <LocationContext.Provider value={{latitude: '', longitude: ''}}>
      <NavigationContainer
        linking={{
          prefixes: ['https://notepad.local', 'notepad://'],
          config: {
            screens: {
              Notes: 'notes',
            },
          },
        }}>
        <Stack.Navigator
          screenOptions={{headerShown: false, gestureEnabled: false}}>
          <Stack.Screen name="Splashscreen" component={Splashscreen} />
          <Stack.Screen name="Notes" component={Notes} />
        </Stack.Navigator>
      </NavigationContainer>
    </LocationContext.Provider>
  );
};

export default App;
