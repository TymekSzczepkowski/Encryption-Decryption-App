import InputEncryptAffine from "../../components/Ciphers/AffineCipher/Encrypt/InputEncryptAffine";
import OutputEncryptAffine from "../../components/Ciphers/AffineCipher/Encrypt/OutputEncryptAffine";
import React, { useState } from "react";

function PlainTextToAffineCipher() {
  const [value, setValue] = useState("");
  return (
    <div>
      <InputEncryptAffine value={value} setValue={setValue} />
      <OutputEncryptAffine value={value} />
    </div>
  );
}
export default PlainTextToAffineCipher;
