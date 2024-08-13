import {useNavigate} from "react-router-dom";
import {enSeal} from "../../encodeServices/enSeal";
import {useEffect, useState} from "react";
import Button from "../../components/Button/Button";
import styles from "./Home.module.scss";
import Decode from "../Decode/Decode";
import EncodeExisting from "../EncodeExisting/EncodeExisting";
import {ensealValidation} from "../../encodeServices/ensealValidation";
import FileContainer from "../../components/FileContainer/FileContainer";

interface HomeProps {
  utf: string[];
}

const Home: React.FC<HomeProps> = ({utf}) => {
  const [seal, setSeal] = useState("");
  const [sealName, setSealName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setSeal("");
    setSealName("");
    if (utf.length === 0) {
      navigate("/");
    }
  }, [utf, navigate]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleEnseal = () => {
    if (window.confirm("Generate and Download a new EnSeal?")) {
      enSeal(utf);
    }
  };

  const handleHowTo = () => {
    navigate("/how-to");
  };

  return (
    <div className={styles.home}>
      <p className={styles.home__para}>EnSeal</p>
      <FileContainer>
        <div className={styles.home__seal}>
          <label htmlFor="enseal-upload" className={styles.home__seal__label}>
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
              className={`${styles.home__seal__text} ${
                seal ? "" : styles.red
              }`}>
              {seal ? sealName + " Uploaded" : "No File Loaded"}
            </p>
          }
        </div>
      </FileContainer>
      <div className={`${styles.home__sec} ${styles.body}`}>
        <EncodeExisting utf={utf} seal={seal} />
        <Decode utf={utf} seal={seal} />
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
