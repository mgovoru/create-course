export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordR: string;
  gender: string | null;
  accept: boolean | undefined;
  upload: string,
  // {
  //   name: string;
  //   size: number;
  //   type: string;
  // };
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
