import * as Yup from 'yup';

export const errorList = [
  'Name is required',
  'Name must start with an uppercase letter',
  'Age is required',
  'Age cannot be negative',
  'Age must be an integer',
  'Invalid email address',
  'Email is required',
  'Password is required',
  'Password must be at least 8 characters long',
  'Password must contain at least one number',
  'Password must contain at least one lowercase letter',
  'Password must contain at least one uppercase letter',
  'Password must contain at least one special character',
  'Password confirmation is required',
  'Passwords must match',
  'Gender is required',
  'You must accept the Terms and Conditions',
  'Country selection is required',
  'Image upload is required',
  'File size must be less than 2 MB',
  'Unsupported file type, only PNG and JPEG are allowed',
];
export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(errorList[0])
    .matches(/^[A-Z]/, errorList[1]),

  age: Yup.number()
    .required(errorList[2])
    .positive(errorList[3])
    .integer(errorList[4]),

  email: Yup.string().email(errorList[5]).required(errorList[6]),

  password: Yup.string()
    .required(errorList[7])
    .min(8, errorList[8])
    .matches(/[0-9]/, errorList[9])
    .matches(/[a-z]/, errorList[10])
    .matches(/[A-Z]/, errorList[11])
    .matches(/[!@#$%^&*(),.?":{}|<>]/, errorList[12]),

  passwordR: Yup.string()
    .required(errorList[13])
    .oneOf([Yup.ref('password')], errorList[14]),

  gender: Yup.string().required(errorList[15]),

  accept: Yup.boolean().oneOf([true], errorList[16]),

  upload: Yup.mixed<FileList | string>()
    .required(errorList[18])
    .test('fileSize', errorList[19], (value) => {
      if (!value) {
        return false;
      } else {
        if (typeof value === 'string') {
          const getFileSizeFromBase64 = (base64String: string) => {
            const stringLength =
              base64String.length - 'data:image/jpeg;base64,'.length;
            const sizeInBytes =
              4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
            return sizeInBytes;
          };
          const size = value ? getFileSizeFromBase64(value) : 0;
          return size <= 2 * 1024 * 1024;
        } else if (!value[0]) {
          return false
        } else return (value[0] as File).size <= 2 * 1024 * 1024;
      }
    })
    .test('fileType', errorList[20], (value) => {
      if (!value) {
        return false;
      } else {
        if (typeof value === 'string') {
          const getTypeFromBase64 = (base64String: string) => {
            const result = /^data:(.*);base64,/.exec(base64String);
            return result ? result[1] : null;
          };
          const type = value ? getTypeFromBase64(value) : '';
          return ['image/png', 'image/jpeg'].includes(type as string);
        } else if (!value[0]) {
          return false
        } else
          return (
            (value[0] as File).type === 'image/png' ||
            (value[0] as File).type === 'image/jpeg'
          );
      }
    }),

  country: Yup.string().required(errorList[17]),
});
