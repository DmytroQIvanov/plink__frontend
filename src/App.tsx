import React from "react";
import "./App.css";
import { Rout } from "./Rout";

import { store } from "./Store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Rout />
      </div>
    </Provider>
  );
}

export default App;
