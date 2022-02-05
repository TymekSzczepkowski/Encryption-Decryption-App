import InputDecryptAffine from "../../components/Ciphers/AffineCipher/Decrypt/InputDecryptAffine";
import OutputDecryptAffine from "../../components/Ciphers/AffineCipher/Decrypt/OutputDecryptAffine";
import React, { useState } from "react";

function AffineCipherToPlainText() {
  const [value, setValue] = useState("");
  return (
    <div>
      <InputDecryptAffine value={value} setValue={setValue} />
      <OutputDecryptAffine value={value} />
    </div>
  );
}
export default AffineCipherToPlainText;
