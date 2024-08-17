export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordR: string;
  gender: string | null;
  accept: boolean | undefined;
  upload: {
    name: string;
    size: number;
    type: string;
  };
  country: string;
}
export interface RootState {
  form: {
    forms: FormData[];
    countries: string[];
  };
}
// export interface FormD {
//   formData: FormData[];
// }
export interface FormD {
  forms: FormData[];
  countries: string[];
}
export interface fileS {
  name: string;
  size: number;
}
