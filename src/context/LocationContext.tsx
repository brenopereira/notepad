import Geolocation from '@react-native-community/geolocation';
import React, {useState} from 'react';
import {Alert} from 'react-native';

export type Location = {
  latitude: number | null;
  longitude: number | null;
};

const LocationContext = React.createContext({});

type Props = {
  children: React.ReactNode;
};

export const LocationProvider: React.FC<Props> = ({children}) => {
  const [location, setLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>({
    latitude: null,
    longitude: null,
  });

  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => Alert.alert('Erro', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
      }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
