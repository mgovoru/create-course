export interface FormDate {
  // name: string;
  // age: number;
  // email: string;
  // password: string;
  // passwordR: string;
  // gender: string;
  // accept?: boolean;
  // upload: File;
  // country: string;
  name: string;
  age: number;
  email: string;
  password: string;
  passwordR: string;
  gender: string;
  accept?: boolean | undefined;
  upload: NonNullable<string | FileList | undefined>;
  country: string;
}
export interface RootState {
  form: {
    forms: FormValues[];
    countries: string[];
  };
}
// export interface FormD {
//   formData: FormData[];
// }
export interface FormD {
  forms: FormValues[];
  countries: string[];
}
export interface fileS {
  name: string;
  size: number;
}
export type FormValues = {
  accept?: boolean;
  name: string;
  age: number;
  email: string;
  password: string;
  passwordR: string;
  gender: string;
  upload: string;
  country: string;
};
