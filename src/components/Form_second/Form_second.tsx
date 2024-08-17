import { useDispatch, useSelector } from 'react-redux';
import './../Form_first/Form_first.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FormValues, RootState } from '../../types';
import { validationSchema } from '../../validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addForm } from '../../store/slice';

export default function Form_Controll() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmitHandler = (data: FormValues) => {
    console.log({ data });
    dispatch(addForm(data));
    reset();
  };

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

  return (
    <>
      <Link rel="stylesheet" to="/">
        ссылка на главную
      </Link>
      <Link rel="stylesheet" to="/form_1">
        ссылка на первую форму
      </Link>
      <form
        action="#"
        method="get"
        noValidate
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="form-element">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name')}
            placeholder="Enter name"
            className="input-data"
          />
          <div className="error">{errors.name?.message as string}</div>
        </div>
        <div className="form-element">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            {...register('age')}
            placeholder="Enter age"
            className="input-data"
          />
          <div className="error">{errors.age?.message as string}</div>
        </div>
        <div className="form-element">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            placeholder="Enter email"
            className="input-data"
          />
          <div className="error">{errors.email?.message as string}</div>
        </div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            placeholder="Enter password"
            className="input-data"
          />
          <div className="error">{errors.password?.message as string}</div>
        </div>
        <div className="form-element">
          <label htmlFor="passwordR">Password</label>
          <input
            type="passwordR"
            id="passwordR"
            {...register('passwordR')}
            placeholder="Enter password"
            className="input-data"
          />
          <div className="error">{errors.passwordR?.message as string}</div>
        </div>
        <div className="form-element">
          <label htmlFor="gender">Gender</label>
          <input type="radio" value="male" id="male" {...register('gender')} />
          Male
          <input
            type="radio"
            value="female"
            id="female"
            {...register('gender')}
          />
          Female
          <div className="error">{errors.gender?.message as string}</div>
        </div>
        <div className="form-element">
          <label htmlFor="accept">accept Terms and Conditions agreement</label>
          <input type="checkbox" id="accept" {...register('accept')} />
          <div className="error">{errors.accept?.message as string}</div>
        </div>
        <div className="form-element">
          <label htmlFor="upload">Upload file</label>
          <input
            type="file"
            id="upload"
            {...register('upload')}
            placeholder="Enter Upload File"
          />
          <div className="error"> {errors.upload?.message as string}</div>
        </div>
        <div className="form-element select-country">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            autoComplete="off"
            id="country-input"
            className="input-data"
            value={inputValue}
            {...register('country', {
              onChange: (e) => {
                setInputValue(e.target.value);
              },
            })}
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
          <div className="error"> {errors.country?.message as string}</div>
        </div>
        <div className="form-element">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
