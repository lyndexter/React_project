import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "./navigation/Navigation";
import Header from "./header/Header";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import ElementsContext from "./utils/Context";
import { fetchData } from "./utils/Api";

library.add(faShoppingCart, faArrowLeft);

function App() {
  const [source, setSource] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setSource(data));
  }, []);

  return (
    <div className="App">
      <Header />

      <ElementsContext.Provider value={{ source, setSource }}>
        <Navigation />
      </ElementsContext.Provider>
    </div>
  );
}

export default App;
