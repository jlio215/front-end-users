import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login-styles.module.scss';
import { RiUserFill, RiLockPasswordFill } from "react-icons/ri";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
      const response = await fetch('http://localhost:3001/auth', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),  
      });

      const data = await response.json();

      if (response.ok) {
        if (data.rol === 'Administrador') {
          localStorage.setItem('access_token', data.access_token);
          router.push('/'); 
        } else {
          router.push('/pagos')
          localStorage.removeItem('access_token');
        }
      } else {
        setErrors(data.mensaje || [{ msg: 'Error de autenticación' }]);
      }
    } catch (error) {
      setErrors([{ msg: 'Error de red: ' + error.message }]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles['form-container']} onSubmit={handleLogin}>
        <h1 className={styles.title}>Autos Colombia</h1>
        <div className={styles["input-box"]}>
          <input
            type="text"
            placeholder='Usuario'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <RiUserFill className={styles.icon} />
        </div>
        <div className={styles["input-box"]}>
          <input
            type="password"
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <RiLockPasswordFill className={styles.icon} />
        </div>
        {errors.length > 0 && (
          <div className={styles.error}>
            {errors.map((error, index) => (
              <p key={index}>{error.msg}</p>
            ))}
          </div>
        )}
        <div className={styles["remember-forgot"]}>
          <label><input type="checkbox" /> <span>Recuérdame</span></label>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
        <button className={styles["submit-button"]} type="submit">Inicia sesión</button>
      </form>
    </div>
  );
}

LoginPage.getLayout = (page) => page;

export default LoginPage;
