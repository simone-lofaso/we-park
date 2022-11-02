/**
 * Type for `users` Table in db.
 */
export type User = {
  id: number;
  email: string;
  password: string;
  tokens: number;
};

/**
 * Type for `spaces` Table in db.
 */
export type ParkingSpace = {
  id: number;
  floor: number;
  row: number;
  section: string;
  garageId: number;
  parkedUserId?: number;
};

/**
 * Type for `garages` table in db.
 */
export type Garage = {
  id: number;
  totalSpaces: number;
  occupiedSpaces: number;
  name: string;
};

/**
 * Type for `plates` table in db.
 */
export type Plate = {
  id: number;
  plateNum: string;
  userId: number;
};
