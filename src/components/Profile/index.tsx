import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ProfileContext } from '../../contexts/ProfileContext';
import styles from '../../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  const { userData } = useContext(ProfileContext);
  const user = {
    name: 'User Name',
    avatar: 'https://avatars.githubusercontent.com/u/2866373?s=400&v=4'
  };

  return (
    <div className={styles.profileContainer}>
      <img src={userData ? userData.avatar_url : user.avatar} alt={userData ? userData.name : user.name} />
      <div>
        <strong>{userData ? userData.name : user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Arrow"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
