import { useState, useEffect } from 'react';
import styles from '../../styles/components/Countdown.module.css';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRigth] = String(minutes).padEnd(2, '0').split('');
  const [secondLeft, secondRigth] = String(seconds).padEnd(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]); 

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigth}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRigth}</span>
        </div>
      </div>

      <button 
        type="button" 
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Start Cycle
      </button>
    </div>
  );
}

export default Countdown;