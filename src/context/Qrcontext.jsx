import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";
const Qrcontext = createContext();

const Qrprovider = ({ children }) => {
  const [word, setWord] = useState("");
  const [size, setSize] = useState("");
  const [qrcode, setQrcode] = useState("");

  let generateqrcode = () => {
    if(word && size){
    let url = `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}`;
    setQrcode(url);
  }else{
    alert("you did not enter the right value")
  }}
  let reset = () => {
    setWord("");
    setSize("");
    setQrcode("");
  };
  return (
    <Qrcontext.Provider
      value={{
        word,
        setWord,
        size,
        setSize,
        qrcode,
        setQrcode,
        reset,
        generateqrcode,
      }}
    >
      {children}
    </Qrcontext.Provider>
  );
};
export { Qrprovider, Qrcontext };
