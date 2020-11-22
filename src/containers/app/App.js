import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navigation from "./navigations/Navigation";
import "./fonts/BebasNeue-Regular.ttf";
import WebFont from "webfontloader";

import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faShoppingCart, faArrowLeft);

function App() {
  WebFont.load({
    google: {
      families: ["Titillium Web:300,400,700", "sans-serif"],
    },
  });
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
