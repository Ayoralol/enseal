import styles from "./Background.module.scss";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({children}) => {
  return (
    <div className={styles.cont}>
      <div className={styles.lCont}></div>
      <div className={styles.center}>{children}</div>
      <div className={styles.rCont}></div>
    </div>
  );
};

export default Background;
