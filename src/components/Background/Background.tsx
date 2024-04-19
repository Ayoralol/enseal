import {useLocation} from "react-router-dom";
import IMAGES from "../../images/Images";
import styles from "./Background.module.scss";
import {useState, useEffect} from "react";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({children}) => {
  const [loc, setLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    switch (path) {
      case "/":
        setLoc("Home");
        break;
      case "/encode-existing":
        setLoc("Encode");
        break;
      case "/decode":
        setLoc("Decode");
        break;
      case "/how-to":
        setLoc("How To");
        break;
      default:
        setLoc("?????");
    }
  }, [location.pathname]);

  return (
    <div className={styles.cont}>
      <p className={styles.loc}>{loc}</p>
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
