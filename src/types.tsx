export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordR: string;
  gender: string;
  accept: boolean;
  upload: {
    name: string;
    size: number;
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
