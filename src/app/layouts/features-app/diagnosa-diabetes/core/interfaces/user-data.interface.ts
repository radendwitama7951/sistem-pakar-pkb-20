import { UserType } from './user.interface';

export interface UserHealthDataInterface {
  user: UserType;

  number_of_pregnant: number;
  plasma_glucose_concentration: number;
  diastolic_blood_pressure: number;
  triceps_skin_fold_thikness: number;
  two_hour_serum_insulin: number;
  body_mass_index: number;
  diabetes_pedigree_function: number | any;
  age: number;
}
