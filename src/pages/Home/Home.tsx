import {useNavigate} from "react-router-dom";
import {enSeal} from "../../encodeServices/enSeal";

interface HomeProps {
  utf: string[];
}

const Home: React.FC<HomeProps> = ({utf}) => {
  const navigate = useNavigate();

  const handleEnseal = () => {
    if (window.confirm("Generate and Download a new EnSeal?")) {
      enSeal(utf);
    }
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
        have an EnSeal already you must generate one
      </p>
      <button onClick={handleEnseal}>Generate an EnSeal</button>
      <button onClick={handleExisting}>Encode with Existing Enseal</button>
      <button onClick={handleDecode}>Decode with Existing Enseal</button>
    </div>
  );
};

export default Home;
