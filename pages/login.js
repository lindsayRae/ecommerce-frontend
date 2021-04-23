import Head from 'next/head';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email);
  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name='description' content='Login here to make your purchase' />
      </Head>

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        />
        <button type='submit' className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}
