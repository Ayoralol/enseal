import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {control} from "../../encodeServices/control";
import Button from "../../components/Button/Button";
import styles from "./EncodeExisting.module.scss";

interface EncodeExistingProps {
  utf: string[];
}

const EncodeExisting: React.FC<EncodeExistingProps> = ({utf}) => {
  const [seal, setSeal] = useState("");
  const [text, setText] = useState("");
  const [textBox, setTextBox] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (utf.length === 0) {
      navigate("/");
    }
  }, [utf, navigate]);

  useEffect(() => {
    setSeal("");
    setText("");
    setTextBox(true);
  }, []);

  const handleHome = () => {
    navigate("/");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = () => {
    if (
      window.confirm(
        "Your message will be Encoded using the provided EnSeal. Continue and Download?"
      )
    ) {
      control(text, seal, utf);
    }
  };

  const handleInputSwap = () => {
    setText("");
    setTextBox(!textBox);
  };

  const textChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
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

  return (
    <div className={styles.encode}>
      <div className={styles.encode__top}>
        <Button handleClick={handleHome}>Home</Button>
        <Button handleClick={handleInputSwap}>
          {textBox ? "Upload a file instead" : "Manually type the message"}
        </Button>
      </div>
      <div className={styles.encode__inputs}>
        {textBox ? (
          <textarea
            onChange={textChange}
            className={styles.encode__inputs__textarea}
          />
        ) : (
          <div>
            <label
              htmlFor="message-upload"
              className={styles.encode__inputs__label}>
              Upload File to Encode
            </label>
            <input
              id="message-upload"
              type="file"
              accept=".txt"
              onChange={handleMessageUpload}
            />
            {
              <p
                className={`${styles.encode__inputs__text} ${
                  text ? styles.blue : styles.red
                }`}>
                {text ? "Message Uploaded" : "No File Loaded"}
              </p>
            }
          </div>
        )}
        <div>
          <label
            htmlFor="enseal-upload"
            className={styles.encode__inputs__label}>
            Upload EnSeal
          </label>
          <input
            id="enseal-upload"
            type="file"
            accept=".txt"
            onChange={handleFileUpload}
          />
          {
            <p
              className={`${styles.encode__inputs__text} ${
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

export default EncodeExisting;
