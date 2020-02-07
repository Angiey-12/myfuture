import { User } from './user';

export interface Account extends User {
  email?: string;
  postcode?: string;
  country?: string;
  isOverseas?: boolean;
}
