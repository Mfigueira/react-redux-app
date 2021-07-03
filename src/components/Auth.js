import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    if (emailRef.current.value === 'a@a' && passRef.current.value === '123') {
      dispatch(authActions.login());
    } else {
      console.log('invalid auth. Use: a@a + 123');
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={passRef} type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
