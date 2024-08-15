import { useRef } from 'react';

export default function Form_Uncontroll() {
  const name = useRef<HTMLInputElement>(null);
  return (
    <form action="#" method="get">
      <label htmlFor="name">Name{name.current ? name.current.value : ''}</label>
      <input
        type="text"
        name="name"
        id="name"
        ref={name}
        placeholder="Enter name"
        required
      />
      {/* <label htmlFor="email">Enter email </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />
      <label htmlFor="gender">Gender</label>
      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        checked={gender === 'male'}
        onChange={(e) => setGender(e.target.value)}
      />
      Male
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={gender === 'female'}
        onChange={(e) => setGender(e.target.value)}
      />
      Female
      <label htmlFor="lang">Country</label>
      <input
        type="checkbox"
        name="lang"
        id="english"
        checked={subjects.english === true}
        onChange={(e) => handleSubjectChange('english')}
      />
      English
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
  );
}
