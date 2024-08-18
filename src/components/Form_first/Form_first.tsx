import { useDispatch, useSelector } from 'react-redux';
import './Form_first.scss';
import { addForm } from '../../store/slice';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FormValues, RootState } from '../../types';
import { errorList, validationSchema } from '../../validation';

export default function Form_Uncontroll() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const countries = useSelector((state: RootState) => state.form.countries);
  useEffect(
    () =>
      setFilteredCountries(
        countries?.filter(
          (country) =>
            country.toLowerCase().includes(inputValue.toLowerCase()) &&
            inputValue !== ''
        )
      ),
    [inputValue, countries]
  );

  const nameForm = useRef<HTMLInputElement>(null);
  const emailForm = useRef<HTMLInputElement>(null);
  const ageForm = useRef<HTMLInputElement>(null);
  const maleForm = useRef<HTMLInputElement>(null);
  const femaleForm = useRef<HTMLInputElement>(null);
  const acceptForm = useRef<HTMLInputElement>(null);
  const fileForm = useRef<HTMLInputElement>(null);
  const passwordForm = useRef<HTMLInputElement>(null);
  const passwordRForm = useRef<HTMLInputElement>(null);
  const countryForm = useRef<HTMLInputElement>(null);
  const errorName = useRef<HTMLDivElement>(null);
  const errorEmail = useRef<HTMLDivElement>(null);
  const errorAge = useRef<HTMLDivElement>(null);
  const errorPassword = useRef<HTMLDivElement>(null);
  const errorPasswordR = useRef<HTMLDivElement>(null);
  const errorGender = useRef<HTMLDivElement>(null);
  const errorAccept = useRef<HTMLDivElement>(null);
  const errorFile = useRef<HTMLDivElement>(null);
  const errorCountry = useRef<HTMLDivElement>(null);
  let base64 = '';
  async function concatDate() {
    function fileToBase64(file: File) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    }
    if (fileForm.current?.files) {
      base64 = (await fileToBase64(fileForm.current?.files[0])) as string;
      return {
        name: nameForm.current?.value || '',
        age: Number(ageForm.current?.value) || 0,
        email: emailForm.current?.value || '',
        password: passwordForm.current?.value || '',
        passwordR: passwordRForm.current?.value || '',
        gender: maleForm.current?.checked
          ? maleForm.current.value
          : femaleForm.current?.checked
            ? femaleForm.current?.value
            : '',
        accept: acceptForm.current?.checked || false,
        upload: (base64 as string) || '',
        country: countryForm.current?.value || '',
      };
    }
  }
  async function buttonSubmit() {
    const date = await concatDate();
    validationSchema.validate(date, { abortEarly: false }).catch((err) => {
      const errorN = err.errors.filter(
        (el: string) => el === errorList[0] || el === errorList[1]
      );
      if (errorN && errorName.current) {
        errorName.current.innerHTML = errorN;
      }
      const errorA = err.errors.filter(
        (el: string) =>
          el === errorList[2] || el === errorList[3] || el === errorList[4]
      );
      if (errorA && errorAge.current) {
        errorAge.current.innerHTML = errorA;
      }
      const errorE = err.errors.filter(
        (el: string) => el === errorList[5] || el === errorList[6]
      );
      if (errorE && errorEmail.current) {
        errorEmail.current.innerHTML = errorE;
      }
      const errorP = err.errors.filter(
        (el: string) =>
          el === errorList[7] ||
          el === errorList[8] ||
          el === errorList[9] ||
          el === errorList[10] ||
          el === errorList[11] ||
          el === errorList[12]
      );
      if (errorP && errorPassword.current) {
        errorPassword.current.innerHTML = errorP;
      }
      const errorPR = err.errors.filter(
        (el: string) => el === errorList[13] || el === errorList[14]
      );
      if (errorPR && errorPasswordR.current) {
        errorPasswordR.current.innerHTML = errorPR;
      }
      const errorG = err.errors.filter((el: string) => el === errorList[15]);
      if (errorG && errorGender.current) {
        errorGender.current.innerHTML = errorG;
      }
      const errorC = err.errors.filter((el: string) => el === errorList[17]);
      if (errorC && errorCountry.current) {
        errorCountry.current.innerHTML = errorC;
      }
      const errorAC = err.errors.filter((el: string) => el === errorList[16]);
      if (errorAC && errorAccept.current) {
        errorAccept.current.innerHTML = errorAC;
      }
      const errorF = err.errors.filter(
        (el: string) =>
          el === errorList[18] || el === errorList[19] || el === errorList[20]
      );
      if (errorF && errorFile.current) {
        errorFile.current.innerHTML = errorF;
      }
    });
    dispatch(addForm(date as FormValues));
    navigate('/');
  }
  return (
    <>
      <Link rel="stylesheet" to="/">
        Main Page
      </Link>
      <Link rel="stylesheet" to="/form_2">
        Second Page
      </Link>
      <form
        action="#"
        method="get"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          buttonSubmit();
        }}
      >
        <div className="form-element">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameForm}
            placeholder="Enter name"
            className="input-data"
          />
          <div className="error" ref={errorName}></div>
        </div>
        <div className="form-element">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            ref={ageForm}
            placeholder="Enter age"
            className="input-data"
          />
          <div className="error" ref={errorAge}></div>
        </div>
        <div className="form-element">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailForm}
            placeholder="Enter email"
            className="input-data"
          />
          <div className="error" ref={errorEmail}></div>
        </div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordForm}
            placeholder="Enter password"
            className="input-data"
          />
          <div className="error" ref={errorPassword}></div>
        </div>
        <div className="form-element">
          <label htmlFor="passwordR">Password</label>
          <input
            type="passwordR"
            name="passwordR"
            id="passwordR"
            ref={passwordRForm}
            placeholder="Enter password"
            className="input-data"
          />
          <div className="error" ref={errorPasswordR}></div>
        </div>
        <div className="form-element">
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            ref={maleForm}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            ref={femaleForm}
          />
          Female
          <div className="error" ref={errorGender}></div>
        </div>
        <div className="form-element">
          <label htmlFor="accept">accept Terms and Conditions agreement</label>
          <input type="checkbox" name="accept" id="accept" ref={acceptForm} />
          <div className="error" ref={errorAccept}></div>
        </div>
        <div className="form-element">
          <label htmlFor="file">Upload file</label>
          <input
            type="file"
            name="file"
            id="file"
            ref={fileForm}
            placeholder="Enter Upload File"
          />
          <div className="error" ref={errorFile}></div>
        </div>
        <div className="form-element select-country">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            autoComplete="off"
            name="country"
            id="country-input"
            className="input-data"
            ref={countryForm}
            value={inputValue}
            onChange={(e) => {
              e.preventDefault();
              setInputValue(e.target.value);
            }}
          />
          {filteredCountries?.length > 0 && (
            <ul className="ulcountries">
              {filteredCountries.map((country) => (
                <li
                  key={country}
                  onClick={() => setInputValue(country)}
                  className="licountry"
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
          <div className="error" ref={errorCountry}></div>
        </div>
        <div className="form-element">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
