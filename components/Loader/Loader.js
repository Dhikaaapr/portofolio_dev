import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}>
          <div className={styles.ring1} />
          <div className={styles.ring2} />
          <div className={styles.ring3} />
          <span className={styles.text}>AP</span>
        </div>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
