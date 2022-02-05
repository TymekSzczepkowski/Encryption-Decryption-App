import InputEncryptVigenere from "../../components/Ciphers/VigenereCipher/Encrypt/InputEncryptVigenere";
import OutputEncryptVigenere from "../../components/Ciphers/VigenereCipher/Encrypt/OutputEncryptVigenere";
import React, { useState } from "react";

function PlainTextToMorseCode() {
  const [value, setValue] = useState("");
  return (
    <div>
      <InputEncryptVigenere value={value} setValue={setValue} />
      <OutputEncryptVigenere value={value} />
    </div>
  );
}
export default PlainTextToMorseCode;
