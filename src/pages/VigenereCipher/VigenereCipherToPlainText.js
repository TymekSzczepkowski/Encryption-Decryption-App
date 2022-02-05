import InputDecryptVigenere from "../../components/Ciphers/VigenereCipher/Decrypt/InputDecryptVigenere";
import OutputDecryptVigenere from "../../components/Ciphers/VigenereCipher/Decrypt/OutputDecryptVigenere";
import React, { useState } from "react";

function VigenereCipherToPlainText() {
  const [value, setValue] = useState("");
  return (
    <div>
      <InputDecryptVigenere value={value} setValue={setValue} />
      <OutputDecryptVigenere value={value} />
    </div>
  );
}
export default VigenereCipherToPlainText;
