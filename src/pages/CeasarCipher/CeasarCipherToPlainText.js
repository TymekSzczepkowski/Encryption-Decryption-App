import InputDecryptCeasar from "../../components/Ciphers/CeasarCipher/Decrypt/InputDecryptCeasar";
import OutputDecryptCeasar from "../../components/Ciphers/CeasarCipher/Decrypt/OutputDecryptCeasar";
import React, { useState } from "react";

function CeasarCipherToPlainText() {
  const [value, setValue] = useState("");
  return (
    <div>
      <InputDecryptCeasar value={value} setValue={setValue} />
      <OutputDecryptCeasar value={value} />
    </div>
  );
}
export default CeasarCipherToPlainText;
