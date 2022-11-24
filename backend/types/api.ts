import type { User, Plate, ParkingSpace } from './database';

export type ApiUser = Omit<User, 'password'> & {
  plates: Plate[];
  parkedSpaceId: ParkingSpace['id'] | null;
};
