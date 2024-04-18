import {useNavigate} from "react-router-dom";
import {enSeal} from "../../encodeServices/enSeal";
import {useEffect} from "react";
import Button from "../../components/Button/Button";

interface HomeProps {
  utf: string[];
}

const Home: React.FC<HomeProps> = ({utf}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (utf.length === 0) {
      navigate("/");
    }
  }, [utf, navigate]);

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
      <Button handleClick={handleExisting} color="red">
        Encode with Existing Enseal
      </Button>
      <Button handleClick={handleDecode} color="blue">
        Decode with Existing Enseal
      </Button>
      <p>
        Choose what you would like to do to get more information, if you do not
        have an EnSeal already you must generate one
      </p>
      <div>
        <Button handleClick={handleEnseal}>Generate an EnSeal</Button>
      </div>
    </div>
  );
};

export default Home;
