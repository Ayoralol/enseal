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
      <button onClick={handleNew}>Encode and Generate New Enseal</button>
      <button onClick={handleExisting}>Encode with Existing Enseal</button>
      <button onClick={handleDecode}>Decode with Existing Enseal</button>
    </div>
  );
};

export default Home;
