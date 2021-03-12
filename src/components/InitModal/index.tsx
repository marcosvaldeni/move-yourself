import { useState, useContext } from 'react';
import styles from '../../styles/components/InitModal.module.css';
import { ProfileContext } from '../../contexts/ProfileContext';
import api from '../../services/api';

import { FaArrowRight } from "react-icons/fa";

interface User {
  name: string;
  avatar_url: string;
}

const InitModal: React.FC = () => {
  const { setUser, activeLogin } = useContext(ProfileContext);
  const [login, setLogin] = useState('');
  const [inputError, setInputError] = useState('');

  async function handlerUserSubmit() {
    try {
      const userInfo = await api.get(login);
      const user:User = userInfo.data;
      setUser(user);
      
    } catch (err) {
      setInputError('Error searching this respository');
    }
    setLogin('');
    activeLogin();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <main className={styles.login}>
          <h1>Move<span>.</span>Yourself</h1>
          <h2>Wellcome</h2>
          <div className={styles.git}>
            <img src="/icons/github.svg" alt="Github Icon"/>
            <p>Log in with your Github to begin</p>
          </div>
          <div className={styles.form}>
            <input 
              value={login}
              onChange={e => setLogin(e.target.value)}
              placeholder="Your Github user here..."
            />
            <button onClick={handlerUserSubmit}>
              <FaArrowRight />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default InitModal;
