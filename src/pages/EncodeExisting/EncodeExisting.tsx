import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {control} from "../../encodeServices/control";
import Button from "../../components/Button/Button";
import styles from "./EncodeExisting.module.scss";
import {charArray} from "../../encodeServices/structures";

interface EncodeExistingProps {
  utf: string[];
  seal: string;
}

const EncodeExisting: React.FC<EncodeExistingProps> = ({utf, seal}) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (utf.length === 0) {
      navigate("/");
    }
  }, [utf, navigate]);

  const handleSubmit = () => {
    // check if text only contains characters from the charArray
    if (text.split("").every((char) => charArray.includes(char))) {
      if (
        window.confirm(
          "Your message will be Encoded using the provided EnSeal. Continue and Download?"
        )
      ) {
        control(text, seal, utf);
      }
    } else {
      alert("Invalid characters in message");
    }
  };

  const textChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleInvalid = () => {
    alert("Please make sure to write a message and upload a valid EnSeal file");
  };

  return (
    <div className={styles.encode}>
      <div className={styles.encode__inputs}>
        <p>Encode a message</p>
        <textarea
          onChange={textChange}
          className={styles.encode__inputs__textarea}
        />
        <Button handleClick={!seal || !text ? handleInvalid : handleSubmit}>
          Encode
        </Button>
      </div>
    </div>
  );
};

export default EncodeExisting;
