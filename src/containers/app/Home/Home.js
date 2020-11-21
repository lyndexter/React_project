import React from "react";
import Heading from "./heading/Heading";

import Catalog from "./catalogs/Catalog";
import CatalogNews from "./catalogs/SecondCatalog";

const Home = () => {
  return (
    <div>
      <Heading />
      <Catalog />
      <CatalogNews />
    </div>
  );
};

export default Home;
