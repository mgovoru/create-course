import { useSelector } from 'react-redux';
import { RootState } from '../../types';
import { Link } from 'react-router-dom';
import './Main.scss';

export default function Main() {
  const forms = useSelector((state: RootState) => state.form.forms);
  return (
    <>
      <Link rel="stylesheet" to="./form_1">
        First Form
      </Link>
      <Link rel="stylesheet" to="./form_2">
        Second Form
      </Link>
      <div className="forms">
        {forms?.map((el, index) => {
          let diff = 'ulitems';
          let array = Object.values(el);
          if (index === forms.length - 1) {
            diff = 'ulitems lastform';
          }
          if (Object.values(el)[2] === true) {
            array = Object.values(el).reverse();
          }
          return (
            <ul key={index} className={diff}>
              {array?.map((ell, index) => (
                <li key={index} className="ulitem">
                  {typeof ell === 'string' && ell.includes('data:image') ? (
                    <div className="div-image">
                      <img src={ell} alt="image" className="image-main" />
                    </div>
                  ) : typeof ell === 'boolean' ? (
                    'accept'
                  ) : (
                    ell
                  )}
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </>
  );
}
