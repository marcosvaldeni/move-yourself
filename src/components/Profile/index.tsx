import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://openpsychometrics.org/tests/characters/test-resources/pics/L/11.jpg" alt="Sun-Hwa Kwon"/>
      <div>
        <strong>Sun-Hwa Kwon</strong>
        <p>
          <img src="icons/level.svg" alt="Arrow"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
