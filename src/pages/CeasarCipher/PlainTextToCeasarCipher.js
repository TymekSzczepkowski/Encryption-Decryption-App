import InputEncryptCeasar from "../../components/Ciphers/CeasarCipher/Encrypt/InputEncryptCeasar";
import OutputEncryptCeasar from "../../components/Ciphers/CeasarCipher/Encrypt/OutputEncryptCeasar";
import React, { useState } from "react";

function PlainTextToMorseCode() {
  const [value, setValue] = useState("");
  return (
    <div>
      <InputEncryptCeasar value={value} setValue={setValue} />
      <OutputEncryptCeasar value={value} />
    </div>
  );
}
export default PlainTextToMorseCode;
