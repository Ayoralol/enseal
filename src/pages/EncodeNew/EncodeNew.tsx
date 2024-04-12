import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {control} from "../../encodeServices/control";

const EncodeNew = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (
      window.confirm(
        "Your message will be Encoded and a new EnSeal will be generated. Continue and Download?"
      )
    ) {
      control(text);
    }
  };

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  // Generate a new EnSeal and encode the message with it, then DL the encoded message and the EnSeal

  return (
    <div>
      <button onClick={handleHome}>Home</button>
      <div>
        <input type="text" onChange={textChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EncodeNew;
