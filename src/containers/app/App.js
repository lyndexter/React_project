import "./App.css";

import Navigation from "./navigations/Navigation";
import Header from "./header/Header";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faShoppingCart, faArrowLeft);

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
