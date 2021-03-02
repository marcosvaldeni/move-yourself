import styles from '../../styles/components/InitModal.module.css';

const InitModal: React.FC = () => {
  
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <main className={styles.login}>
          <h1>Move<span>.</span>Yourself</h1>
          <h2>Wellcome</h2>
          <div className={styles.git}>
            <img src="/icons/github.svg" alt=""/>
            <p>Log in with your Github to begin</p>
          </div>
          <div className={styles.form}>
            <input />
            <button>
              icon
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default InitModal;
