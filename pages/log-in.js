import React from 'react';
import styles from '../styles/login-styles.module.scss';
import { RiUserFill, RiLockPasswordFill } from "react-icons/ri";

function LoginPage() {
  return (
    <div className={styles.wrapper}> 
      <form className={styles['form-container']} action="">
        <h1 className={styles.title}>Autos Colombia</h1>
        <div className={styles["input-box"]}> 
          <input type="text" placeholder='Usuario' required/>
          <RiUserFill className={styles.icon}/> 
        </div>
        <div className={styles["input-box"]}> 
          <input type="password" placeholder='Contraseña' required/>
          <RiLockPasswordFill className={styles.icon}/> 
        </div>
        
        <div className={styles["remember-forgot"]}> 
          <label><input type="checkbox"/> <a2>Recuérdame</a2></label>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>

        <button className={styles["submit-button"]} type="submit">Inicia sesión</button>
      </form>
    </div>
  );
}

LoginPage.getLayout = (page) => page;

export default LoginPage;
