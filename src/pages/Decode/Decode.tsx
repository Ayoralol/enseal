import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {decodeControl} from "../../decodeServices/decodeControl";
import Button from "../../components/Button/Button";

interface DecodeProps {
  utf: string[];
}

const Decode: React.FC<DecodeProps> = ({utf}) => {
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

  // Encode the message with an existing EnSeal and DL the encoded message

  return (
    <div>
      <Button handleClick={handleHome}>Home</Button>
      <div>
        <input type="file" accept=".txt" onChange={handleMessageUpload} />
        <input type="file" accept=".txt" onChange={handleSealUpload} />
        <Button handleClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Decode;
