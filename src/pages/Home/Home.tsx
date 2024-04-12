import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNew = () => {
    navigate("/encode-new");
  };
  const handleExisting = () => {
    navigate("/encode-existing");
  };
  const handleDecode = () => {
    navigate("/decode");
  };

  return (
    <div>
      <p>
        Choose what you would like to do to get more information, if you do not
        have an EnSeal already, choose Encode and Generate New Enseal
      </p>
      <button onClick={handleNew}>Encode and Generate New Enseal</button>
      <button onClick={handleExisting}>Encode with Existing Enseal</button>
      <button onClick={handleDecode}>Decode with Existing Enseal</button>
    </div>
  );
};

export default Home;
