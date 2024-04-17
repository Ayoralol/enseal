import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {decodeControl} from "../../decodeServices/decodeControl";

interface DecodeProps {
  utf: string[];
}

const Decode: React.FC<DecodeProps> = ({utf}) => {
  const [seal, setSeal] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

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
      <button onClick={handleHome}>Home</button>
      <div>
        <input type="file" accept=".txt" onChange={handleMessageUpload} />
        <input type="file" accept=".txt" onChange={handleSealUpload} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Decode;
