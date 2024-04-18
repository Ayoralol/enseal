import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {control} from "../../encodeServices/control";
import Button from "../../components/Button/Button";

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
      <Button handleClick={handleHome}>Home</Button>
      <div>
        <input type="text" onChange={textChange} />
        <input type="file" accept=".txt" onChange={handleFileUpload} />
        <Button handleClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default EncodeExisting;
