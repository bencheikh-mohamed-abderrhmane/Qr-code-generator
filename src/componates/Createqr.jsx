import React, { useContext } from "react";
import { Qrcontext } from "../context/Qrcontext";
import "./create.css"
function Createqr(props) {
  let { word, setWord, size, setSize, generateqrcode } = useContext(Qrcontext);
  return (
    <div className="principale">
      <h1 className="h1">bienvenue sur le qrgenerator</h1>
      <h2>mot a cacher</h2>
      <div>
        <input
        className="ajoute"
          type="text"
          value={word}
          onInput={() => setWord(event.target.value)}
          placeholder="ajoute un mot"
        />
      </div>
      <h2>taille du Qrcode</h2>
      <div>
        <select value={size} onChange={() => setSize(event.target.value)}
        className="taille">
          <option value="default">-----</option>
          <option value="200x200">200x200</option>
          <option value="300x300">300x300</option>
          <option value="400x400">400x400</option>
        </select>
        <input type="button" value="generate" onClick={generateqrcode} className="generate" />
      </div>
    </div>
  );
}

export default Createqr;
