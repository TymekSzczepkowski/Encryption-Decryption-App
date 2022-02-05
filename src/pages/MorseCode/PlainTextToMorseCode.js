import InputEncrypt from "../../components/Ciphers/MorseCode/Encrypt/InputEncrypt";
import OutputEncrypt from "../../components/Ciphers/MorseCode/Encrypt/OutputEncrypt";
import React, { useState } from "react";

function PlainTextToMorseCode() {
  const [value, setValue] = useState("");
  return (
    <div>
      <InputEncrypt value={value} setValue={setValue} />
      <OutputEncrypt value={value} />
    </div>
  );
}
export default PlainTextToMorseCode;
