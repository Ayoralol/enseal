import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import EncodeNew from "./pages/EncodeNew/EncodeNew";
import EncodeExisting from "./pages/EncodeExisting/EncodeExisting";
import Decode from "./pages/Decode/Decode";

function App() {
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
