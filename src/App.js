import "./App.css";
import Footer from "./components/Footer/Footer";
import PlainTextToMorseCode from "./pages/MorseCode/PlainTextToMorseCode";
import MorseCodeToPlainText from "./pages/MorseCode/MorseCodeToPlainText";
import PlainTextToCeasarCipher from "./pages/CeasarCipher/PlainTextToCeasarCipher";
import CeasarCipherToPlainText from "./pages/CeasarCipher/CeasarCipherToPlainText";
import PlainTextToAffineCipher from "./pages/AffineCipher/PlainTextToAffineCipher";
import AffineCipherToPlainText from "./pages/AffineCipher/AffineCipherToPlainText";
import PlainTextToVigenere from "./pages/VigenereCipher/PlainTextToVigenere";
import VigenereCipherToPlainText from "./pages/VigenereCipher/VigenereCipherToPlainText";
import useWebsiteTitle from "./hooks/useWebsiteTitle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useWebsiteTitle("Encryption Decryption");
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/plaintexttomorsecode'
            element={<PlainTextToMorseCode />}
          />
          <Route
            path='/morsecodetoplaintext'
            element={<MorseCodeToPlainText />}
          />
          <Route
            path='/plaintexttoceasar'
            element={<PlainTextToCeasarCipher />}
          />
          <Route
            path='/ceasartoplaintext'
            element={<CeasarCipherToPlainText />}
          />
          <Route
            path='/plaintextoaffine'
            element={<PlainTextToAffineCipher />}
          />
          <Route
            path='/affinetoplaintext'
            element={<AffineCipherToPlainText />}
          />
          <Route
            path='/plaintexttovigenere'
            element={<PlainTextToVigenere />}
          />
          <Route
            path='/vigeneretoplaintext'
            element={<VigenereCipherToPlainText />}
          />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
