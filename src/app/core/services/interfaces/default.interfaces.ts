// Default
export interface Field {
  id: string;
  name: string;
  type: string;
  localized: boolean;
  required: boolean;
  validations: Validation[];
  disabled: boolean;
  omitted: boolean;
  defaultValue?: DefaultValue;
}

export interface DefaultValue {
  'en-US': boolean | string;
}

export interface Validation {
  unique?: boolean;
  size?: Size;
  message?: string;
}

export interface Size {
  max: number;
}

export interface Sys {
  space: CreatedBy;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: CreatedBy;
  publishedVersion: number;
  publishedAt: Date;
  firstPublishedAt: Date;
  createdBy: CreatedBy;
  updatedBy: CreatedBy;
  publishedCounter: number;
  version: number;
  publishedBy: CreatedBy;
}

export interface CreatedBy {
  sys: CreatedBySys;
}

export interface CreatedBySys {
  type: string;
  linkType: string;
  id: string;
}
