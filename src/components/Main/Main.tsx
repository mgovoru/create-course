import { useSelector } from 'react-redux';
import { RootState } from '../../types';
import { Link } from 'react-router-dom';
import './Main.scss';

export default function Main() {
  const forms = useSelector((state: RootState) => state.form.forms);
  return (
    <>
      <Link rel="stylesheet" to="./form_1">
        ссылка на первую форму
      </Link>
      <Link rel="stylesheet" to="./form_2">
        ссылка на вторую форму
      </Link>
      <div className="forms">
        {forms?.map((el, index) => (
          <ul key={index} className="ulitems">
            {Object.values(el)?.map((ell, index) => (
              <li key={index} className="ulitem">
                {ell}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
}
