import { Field, Sys } from 'contentful';

export interface AplikasiInteface {
  name: string;
  description: string;
  displayField: string;
  fields: Field[];
  sys: Sys;
}
