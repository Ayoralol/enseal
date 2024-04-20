import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {decodeControl} from "../../decodeServices/decodeControl";
import Button from "../../components/Button/Button";
import styles from "./Decode.module.scss";
import {ensealValidation} from "../../encodeServices/ensealValidation";

interface DecodeProps {
  utf: string[];
}

const Decode: React.FC<DecodeProps> = ({utf}) => {
  const [text, setText] = useState("");
  const [seal, setSeal] = useState("");
  const [sealName, setSealName] = useState("");
  const [messageName, setMessageName] = useState("");
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
    setSeal("");
    const file = event.target.files?.[event.target.files.length - 1];

    if (file) {
      const fileName = file.name;
      setSealName(fileName);

      const reader = new FileReader();

      reader.onload = (event) => {
        const contents = event.target?.result as string;
        const isValid = ensealValidation(contents, utf);
        if (fileName.length < 40) {
          if (isValid) {
            setSeal(contents);
          } else {
            alert("Invalid EnSeal File");
          }
        } else {
          alert("Please shorten the name of the  file you wish to upload");
        }
      };

      reader.readAsText(file);
    }
  };

  const handleMessageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[event.target.files.length - 1];

    if (file) {
      const fileName = file.name;
      setMessageName(fileName);

      const reader = new FileReader();

      reader.onload = (event) => {
        const contents = event.target?.result as string;
        if (fileName.length < 40) {
          if (contents) {
            setText(contents);
          }
        } else {
          alert("Please shorten the name of the  file you wish to upload");
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

  const handleInvalid = () => {
    alert(
      "Please make sure to upload the encoded message and a valid EnSeal file"
    );
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
                text ? "" : styles.red
              }`}>
              {text ? messageName + " Uploaded" : "No File Loaded"}
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
                seal ? "" : styles.red
              }`}>
              {seal ? sealName + " Uploaded" : "No File Loaded"}
            </p>
          }
        </div>
        <Button handleClick={!seal || !text ? handleInvalid : handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Decode;
