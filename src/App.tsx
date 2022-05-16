import React from 'react';
import {Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LocationContext, LocationProvider} from './context/LocationContext';
import Splashscreen from './screens/splashscreen';
import Notes from './screens/notes';
import NoteDetail from './screens/note-detail';
import CreateNote from './screens/note-create';
import {NotesProvider} from './context/NotesContext';
import EditNote from './screens/note-edit';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <LocationProvider>
      <NotesProvider>
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
            <Stack.Screen name="NoteDetail" component={NoteDetail} />
            <Stack.Screen name="CreateNote" component={CreateNote} />
            <Stack.Screen name="EditNote" component={EditNote} />
          </Stack.Navigator>
        </NavigationContainer>
      </NotesProvider>
    </LocationProvider>
  );
};

export default App;
