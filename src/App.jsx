import { Qrcontext, Qrprovider } from "./context/Qrcontext";
import "./App.css";
import Home from "./Pages/Home";

import React, { useContext } from "react";

function App(props) {

  return (<>
    <Qrprovider>
    <Home />
    </Qrprovider>
    </>
  );
}

export default App;
