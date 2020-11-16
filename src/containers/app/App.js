import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navigation from "./navigations/Navigation";
import Heading from "./heading/Heading";

import Catalog from "./catalog/Catalog";
import CatalogNews from "./catalog/SecondCatalog";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation />
      <Heading />
      <Catalog />
      <CatalogNews />
      <Footer />
    </div>
  );
}

export default App;
