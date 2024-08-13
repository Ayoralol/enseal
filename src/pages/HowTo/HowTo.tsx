import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button";
import {useEffect} from "react";
import styles from "./HowTo.module.scss";

interface HowToProps {
  utf: string[];
}

const HowTo: React.FC<HowToProps> = ({utf}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (utf.length === 0) {
      navigate("/");
    }
  }, [utf, navigate]);

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.how}>
      <Button handleClick={handleHome}>Home</Button>
      <p className={styles.how__para}>
        To encode and decode a message, you first must generate an EnSeal which
        will download a .txt file to your computer.
      </p>
      <p className={styles.how__para}>
        This file is used as the "key" when encoding and decoding a message, and
        will not work properly if the contents are edited. Anyone you give that
        EnSeal to will be able to decode the messages that you send them.
      </p>
      <p className={styles.how__para}>
        When you encode and decode a message, they will also be downloaded as
        .txt files.
      </p>
      <p className={styles.how__para}>
        Ensure you only use characters avaliable on an ANSI QWERTY Keyboard.
      </p>
      <p className={styles.how__para}>
        You dont need to worry about someone else generating the same EnSeal as
        there are ((9025!)^2 x 95!) possible combinations, which is 3.634410835
        x 10^63708 (Or just a really big number).
      </p>
      <p className={styles.how__para}>
        If you have line breaks in your message (by pressing enter), they will
        not be preserved when encoding and decoding.
      </p>
    </div>
  );
};

export default HowTo;
