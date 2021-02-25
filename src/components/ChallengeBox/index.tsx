import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import styles from '../../styles/components/ChallengeBox.module.css';
import CompletedChallenges from '../CompletedChallenges';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function hadleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function hadleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Get {activeChallenge.amaunt} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="#"/>
            <strong>New challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={hadleChallengeFailed}
            >Failed</button>
            <button
              type="button"
              className={styles.challengeCompletedButton}
              onClick={hadleChallengeSucceeded}
            >Completed</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Start a cycle to receive challenges to complete</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Level up by completing challenges
          </p>
        </div>
      )}

    </div>
  );
}

export default ChallengeBox;
