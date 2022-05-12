import {createContext} from 'react';

type LocationProps = {
  longitude: null | string;
  latitude: null | string;
};

export const LocationContext = createContext<LocationProps>({
  longitude: null,
  latitude: null,
});
