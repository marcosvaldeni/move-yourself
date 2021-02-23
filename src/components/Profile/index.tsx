import styles from '../../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://openpsychometrics.org/tests/characters/test-resources/pics/L/11.jpg" alt="Sun-Hwa Kwon"/>
      <div>
        <strong>Sun-Hwa Kwon</strong>
        <p>
          <img src="icons/level.svg" alt="Arrow"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
