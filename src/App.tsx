import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import EncodeExisting from "./pages/EncodeExisting/EncodeExisting";
import Decode from "./pages/Decode/Decode";
import {useEffect, useState} from "react";
import Background from "./components/Background/Background";
import HowTo from "./pages/HowTo/HowTo";

function App() {
  const [utf8, setUtf8] = useState<string[]>([]);

  useEffect(() => {
    const utf8Array = [];
    for (let i = 1; i < 9026; i++) {
      utf8Array.push(String.fromCharCode(i + 31));
    }
    setUtf8(utf8Array);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Background>
          <Routes>
            <Route path="/" element={<Home utf={utf8} />} />
            <Route
              path="/encode-existing"
              element={<EncodeExisting utf={utf8} />}
            />
            <Route path="/decode" element={<Decode utf={utf8} />} />
            <Route path="/how-to" element={<HowTo utf={utf8} />} />
          </Routes>
        </Background>
      </BrowserRouter>
    </>
  );
}

export default App;
