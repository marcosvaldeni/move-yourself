import { useState, useEffect, useContext } from 'react';
import { clearTimeout } from 'timers';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setisActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRigth] = String(minutes).padEnd(2, '0').split('');
  const [secondRigth, secondLeft] = String(seconds).padEnd(2, '0').split('');

  const startCountdown = () => {
    clearTimeout(countdownTimeout);
    setisActive(true);
  }

  const resetCountdown = () => {
    setisActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setisActive(false);
      startNewChallenge();
    }
  }, [isActive, time]); 

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

      { hasFinished ? (
        <button 
          disabled
          className={styles.countdownButton}
        >
          Cycle Closed
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type="button" 
              className={
                `${styles.countdownButton} ${styles.countdownButtonActive}`
              }
              onClick={resetCountdown}
            >
              Stop Cycle
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Start Cycle
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Countdown;