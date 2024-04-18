import IMAGES from "../../images/Images";
import styles from "./Background.module.scss";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({children}) => {
  return (
    <div className={styles.cont}>
      <div className={styles.lCont}>
        <img src={IMAGES.bg} className={styles.lCont__img} />
      </div>
      <div className={styles.center}>{children}</div>
      <div className={styles.rCont}>
        <img src={IMAGES.bg} className={styles.rCont__img} />
      </div>
    </div>
  );
};

export default Background;
