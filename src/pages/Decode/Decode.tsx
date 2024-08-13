import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {decodeControl} from "../../decodeServices/decodeControl";
import Button from "../../components/Button/Button";
import styles from "./Decode.module.scss";
import FileContainer from "../../components/FileContainer/FileContainer";

interface DecodeProps {
  utf: string[];
  seal: string;
}

const Decode: React.FC<DecodeProps> = ({utf, seal}) => {
  const [text, setText] = useState("");
  const [messageName, setMessageName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (utf.length === 0) {
      navigate("/");
    }
  }, [utf, navigate]);

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
      <div className={styles.decode__sec}>
        <p>Decode a file</p>
        <FileContainer>
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
        </FileContainer>
        <Button handleClick={!seal || !text ? handleInvalid : handleSubmit}>
          Decode
        </Button>
      </div>
    </div>
  );
};

export default Decode;
