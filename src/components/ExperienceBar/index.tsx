import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/ExperienceBar.module.css';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextlevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextlevel);

  console.log(percentToNextLevel);
  
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%`}}></div>
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
        {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextlevel} xp</span>
    </header>
  );
}

export default ExperienceBar;