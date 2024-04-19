import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {decodeControl} from "../../decodeServices/decodeControl";
import Button from "../../components/Button/Button";
import styles from "./Decode.module.scss";

interface DecodeProps {
  utf: string[];
}

const Decode: React.FC<DecodeProps> = ({utf}) => {
  const [text, setText] = useState("");
  const [seal, setSeal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (utf.length === 0) {
      navigate("/");
    }
  }, [utf, navigate]);

  useEffect(() => {
    setText("");
    setSeal("");
  }, []);

  const handleHome = () => {
    navigate("/");
  };

  const handleSealUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[event.target.files.length - 1];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const contents = event.target?.result as string;
        if (contents) {
          setSeal(contents);
        }
      };

      reader.readAsText(file);
    }
  };

  const handleMessageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[event.target.files.length - 1];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const contents = event.target?.result as string;
        if (contents) {
          setText(contents);
        }
      };

      reader.readAsText(file);
    }
  };

  const handleSubmit = () => {
    if (
      window.confirm(
        "Your message will be Decoded using the provided EnSeal. Continue and Download?"
      )
    ) {
      decodeControl(text, seal, utf);
    }
  };

  return (
    <div className={styles.decode}>
      <Button handleClick={handleHome}>Home</Button>
      <div className={styles.decode__sec}>
        <div>
          <label htmlFor="message-upload" className={styles.decode__sec__file}>
            Upload File to Decode
          </label>
          <input
            id="message-upload"
            type="file"
            accept=".txt"
            onChange={handleMessageUpload}
          />
          {
            <p
              className={`${styles.decode__sec__text} ${
                text ? styles.blue : styles.red
              }`}>
              {text ? "Message Uploaded" : "No File Loaded"}
            </p>
          }
        </div>
        <div>
          <label htmlFor="enseal-upload" className={styles.decode__sec__file}>
            Upload EnSeal
          </label>
          <input
            id="enseal-upload"
            type="file"
            accept=".txt"
            onChange={handleSealUpload}
          />
          {
            <p
              className={`${styles.decode__sec__text} ${
                seal ? styles.blue : styles.red
              }`}>
              {seal ? "EnSeal Uploaded" : "No File Loaded"}
            </p>
          }
        </div>
        <Button handleClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Decode;
