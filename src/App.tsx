import {BrowserRouter, Route, Routes} from "react-router-dom";
import {control} from "./encodeServices/control";
import {txtFileToString} from "./encodeServices/smallerServices";
import Home from "./pages/Home/Home";
import EncodeNew from "./pages/EncodeNew/EncodeNew";
import EncodeExisting from "./pages/EncodeExisting/EncodeExisting";
import Decode from "./pages/Decode/Decode";

function App() {
  const handleClick = async () => {
    const message = "This is a test message to encode.";
    const enseal = await txtFileToString("./EnSeal.txt");
    console.log(message);
    control(message, enseal);
    console.log("executed");
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encode-new" element={<EncodeNew />} />
          <Route path="/encode-existing" element={<EncodeExisting />} />
          <Route path="/decode" element={<Decode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
