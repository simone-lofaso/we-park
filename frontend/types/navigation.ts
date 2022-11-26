/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParkingSpace } from './api';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Register: undefined;
  TakePicture:undefined;
  ScanAI: {
    Picture: string;
  }
  Login: undefined;
  Home: undefined;
  Map: {
    parkingSpace: ParkingSpace;
    garageName: string;
  };
  Profile: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
