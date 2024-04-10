import {control} from "./encodeServices/control";
import {txtFileToString} from "./encodeServices/smallerServices";

function App() {
  const handleClick = async () => {
    const message = "This is a test message to encode.";
    const enseal = await txtFileToString("./EnSeal.txt");
    control(message, enseal);
    console.log("executed");
  };
  return (
    <>
      <button onClick={handleClick}>CLIK M</button>
    </>
  );
}

export default App;
