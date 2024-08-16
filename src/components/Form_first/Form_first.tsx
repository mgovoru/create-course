import { useDispatch, useSelector } from 'react-redux';
import './Form_first.scss';
import { addForm, setCountries } from '../../store/slice';
//import { RootState } from '../../types';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { RootState } from '../../types';

export default function Form_Uncontroll() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const countries = useSelector((state: RootState) => state.form.countries);
  console.log(countries);
  useEffect(
    () =>
      setFilteredCountries(
        countries?.filter((country) =>
          country.toLowerCase().includes(inputValue.toLowerCase())
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
  function buttonSubmit() {
    dispatch(
      addForm({
        name: nameForm.current?.value || '',
        age: Number(ageForm.current?.value),
        email: emailForm.current?.value || '',
        password: passwordForm.current?.value || '',
        passwordR: passwordRForm.current?.value || '',
        gender: maleForm.current?.value || femaleForm.current?.value || '',
        accept: acceptForm.current?.checked || false,
        upload: {
          name:
            fileForm.current && fileForm.current.files
              ? fileForm.current.files[0].name || ''
              : '',
          size:
            fileForm.current && fileForm.current.files
              ? fileForm.current.files[0].size || 0
              : 0,
        },
        country: '',
      })
    );
  }
  return (
    <>
      <Link rel="stylesheet" to="/">
        {' '}
        ссылка на главную
      </Link>
      <Link rel="stylesheet" to="./form_2">
        {' '}
        ссылка на вторую форму
      </Link>
      <form
        action="#"
        method="get"
        onSubmit={(event) => {
          event.preventDefault();
          buttonSubmit();
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameForm}
            placeholder="Enter name"
            className="input-data"
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            ref={ageForm}
            placeholder="Enter age"
            className="input-data"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailForm}
            placeholder="Enter email"
            className="input-data"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordForm}
            placeholder="Enter password"
            className="input-data"
            required
          />
        </div>
        <div>
          <label htmlFor="passwordR">Password</label>
          <input
            type="passwordR"
            name="passwordR"
            id="passwordR"
            ref={passwordRForm}
            placeholder="Enter password"
            className="input-data"
            required
          />
        </div>
        <div>
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
        </div>
        <div>
          <label htmlFor="accept">accept Terms and Conditions agreement</label>
          <input type="checkbox" name="accept" id="accept" ref={acceptForm} />
        </div>
        <div>
          <label htmlFor="file">Upload file</label>
          <input
            type="file"
            name="file"
            id="file"
            ref={fileForm}
            placeholder="Enter Upload File"
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country-input"
            ref={countryForm}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {filteredCountries?.length > 0 && (
            <ul>
              {filteredCountries.map((country) => (
                <li key={country} onClick={() => setInputValue(country)}>
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit">Submit</button>
        {/* 
      <input
        type="checkbox"
        name="lang"
        id="maths"
        checked={subjects.maths === true}
        onChange={(e) => handleSubjectChange('maths')}
      />
      Maths
      <input
        type="checkbox"
        name="lang"
        id="physics"
        checked={subjects.physics === true}
        onChange={(e) => handleSubjectChange('physics')}
      />
      Physics
      <label htmlFor="file">Upload Resume*</label>
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => setResume(e.target.files[0])}
        placeholder="Enter Upload File"
        required
      />
      <label htmlFor="url">Enter URL*</label>
      <input
        type="url"
        name="url"
        id="url"
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter url"
        required
      /> */}
      </form>
    </>
  );
}
