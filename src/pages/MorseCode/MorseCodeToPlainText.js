import InputDecrypt from "../../components/Ciphers/MorseCode/Decrypt/InputDecrypt";
import OutputDecrypt from "../../components/Ciphers/MorseCode/Decrypt/OutputDecrypt";
import React, { useState } from "react";

function MorseCodeToPlainText() {
  const [value, setValue] = useState("");
  return (
    <div>
      <InputDecrypt value={value} setValue={setValue} />
      <OutputDecrypt value={value} />
    </div>
  );
}
export default MorseCodeToPlainText;
