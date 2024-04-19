import {useNavigate} from "react-router-dom";
import {enSeal} from "../../encodeServices/enSeal";
import {useEffect} from "react";
import Button from "../../components/Button/Button";
import styles from "./Home.module.scss";

interface HomeProps {
  utf: string[];
}

const Home: React.FC<HomeProps> = ({utf}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (utf.length === 0) {
      navigate("/");
    }
  }, [utf, navigate]);

  const handleEnseal = () => {
    if (window.confirm("Generate and Download a new EnSeal?")) {
      enSeal(utf);
    }
  };

  const handleExisting = () => {
    navigate("/encode-existing");
  };

  const handleDecode = () => {
    navigate("/decode");
  };

  const handleHowTo = () => {
    navigate("/how-to");
  };

  return (
    <div className={styles.home}>
      <p className={styles.home__para}>Choose your option</p>
      <div className={styles.home__sec}>
        <Button handleClick={handleExisting} color="red">
          Encode with Existing Enseal
        </Button>
        <Button handleClick={handleDecode} color="blue">
          Decode with Existing Enseal
        </Button>
      </div>
      <p className={styles.home__para}>
        If you do not have an EnSeal already you must generate one
      </p>
      <div className={styles.home__sec}>
        <Button handleClick={handleEnseal}>Generate an EnSeal</Button>
      </div>
      <div className={styles.home__sec}>
        <Button handleClick={handleHowTo}>How it works</Button>
      </div>
    </div>
  );
};

export default Home;
