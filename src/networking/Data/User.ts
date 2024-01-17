export type Users = User[];

export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}
export interface Address {
  geoLocation: GeoLocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface GeoLocation {
  lat: string;
  long: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}
