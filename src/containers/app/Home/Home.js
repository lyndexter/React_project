import React from "react";
import Heading from "./heading/Heading";

import Catalog from "./catalogPreview/Catalog";
import CatalogNews from "./catalogPreview/SecondCatalog";

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
