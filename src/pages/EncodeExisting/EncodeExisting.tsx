import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {control} from "../../encodeServices/control";

interface EncodeExistingProps {
  utf: string[];
}

const EncodeExisting: React.FC<EncodeExistingProps> = ({utf}) => {
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

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  // Encode the message with an existing EnSeal and DL the encoded message

  return (
    <div>
      <button onClick={handleHome}>Home</button>
      <div>
        <input type="text" onChange={textChange} />
        <input type="file" accept=".txt" onChange={handleFileUpload} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EncodeExisting;
