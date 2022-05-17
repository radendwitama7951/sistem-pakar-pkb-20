import { MahasiswaInterface } from './mahasiswa.interface';

export type UserType = UserInterface | MahasiswaInterface;

export interface UserInterface {
  email: string;
  last_name: string;
  first_name: string;

  date_joined?: Date | string;
  last_login?: Date | string;

  is_staff?: boolean;
  is_admin?: boolean;
}
