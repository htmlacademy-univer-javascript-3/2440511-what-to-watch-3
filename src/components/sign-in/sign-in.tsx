import {useState} from 'react';
import {useMyDispatch} from '../../redux/hooks.ts';
import {login} from '../../redux/api-action.ts';
import {Link, useNavigate} from 'react-router-dom';


export function SignIn(){
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useMyDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    dispatch(login({email: email, password: pass})).then(x => {
      if (x.payload) {
        navigate('/');
      } else {
        // eslint-disable-next-line no-alert
        alert('Ошибка авторизации');
      }
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={'/'} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input className="sign-in__input" type="email" name="user-email" placeholder="Email address" value={email} onChange={x => setEmail(x.target.value)}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" type="password" name="user-password" placeholder="Password" value={pass} onChange={x => setPass(x.target.value)}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type={'submit'} onClick={onSubmit}>Sign in</button>
        </div>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
