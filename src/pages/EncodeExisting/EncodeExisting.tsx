import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {control} from "../../encodeServices/control";
import Button from "../../components/Button/Button";
import styles from "./EncodeExisting.module.scss";
import {ensealValidation} from "../../encodeServices/ensealValidation";

interface EncodeExistingProps {
  utf: string[];
}

const EncodeExisting: React.FC<EncodeExistingProps> = ({utf}) => {
  const [seal, setSeal] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (utf.length === 0) {
      navigate("/");
    }
  }, [utf, navigate]);

  useEffect(() => {
    setSeal("");
    setText("");
  }, []);

  const handleHome = () => {
    navigate("/");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeal("");
    const file = event.target.files?.[event.target.files.length - 1];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const contents = event.target?.result as string;
        const isValid = ensealValidation(contents, utf);
        if (isValid) {
          setSeal(contents);
        } else {
          alert("Invalid EnSeal File");
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

  const textChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleInvalid = () => {
    alert("Please make sure to write a message and upload a valid EnSeal file");
  };

  return (
    <div className={styles.encode}>
      <div className={styles.encode__top}>
        <Button handleClick={handleHome}>Home</Button>
      </div>
      <div className={styles.encode__inputs}>
        <textarea
          onChange={textChange}
          className={styles.encode__inputs__textarea}
        />
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
        <Button handleClick={!seal || !text ? handleInvalid : handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EncodeExisting;
