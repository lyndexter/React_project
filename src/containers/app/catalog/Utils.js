let data = [];

export const comparator = (a, b, standard) => {
  switch (standard) {
    case "highPrice":
      if (a.priceInUAH > b.priceInUAH) return -1;
      else if (a.priceInUAH < b.priceInUAH) return 1;
      else return 0;
    case "alphabet":
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else return 0;
    case "lowPrice":
      if (a.priceInUAH > b.priceInUAH) return 1;
      else if (a.priceInUAH < b.priceInUAH) return -1;
      else return 0;
    case "material":
      if (a.material > b.material) return 1;
      else if (a.material < b.material) return -1;
      else return 0;
  }
};

export const sortBy = (inputList, sortType) => {
  if (sortType === "default") {
    return [...data];
  }
  let result = inputList.sort((a, b) => comparator(a, b, sortType));
  return result;
};

export const filterByPrice = (inputList, filterPrice) => {
  if (filterPrice === "default") {
    return inputList;
  }
  let result = [];

  switch (filterPrice) {
    case "priceLess100":
      result = inputList.filter((a) => a.priceInUAH < 100);
      break;
    case "priceMore100":
      result = inputList.filter((a) => a.priceInUAH >= 100);
      break;
    case "priceMore200":
      result = inputList.filter((a) => a.priceInUAH > 200);
      break;
    case "priceMore500":
      result = inputList.filter((a) => a.priceInUAH > 500);
      break;
  }
  console.log("filter price", result);
  return result;
};

export const filterByDoor = (inputList, filterDoor) => {
  if (filterDoor === "default") {
    return inputList;
  }
  if (filterDoor === "doorsMore") {
    let result = inputList.filter(
      (a) => a.doorCount != "2" && a.doorCount != "4"
    );
    return result;
  }

  let result = inputList.filter((a) => a.doorCount == filterDoor.substr(5));

  return result;
};

export const filterByMaterial = (inputList, filterMaterial) => {
  if (filterMaterial === "default") {
    return inputList;
  }
  let result = [];
  if (filterMaterial === "materialOthers") {
    result = inputList.filter(
      (a) =>
        a.material !== "metal" &&
        a.material !== "plastic" &&
        a.material !== "carbon"
    );
  } else {
    result = inputList.filter(
      (a) => a.material === filterMaterial.toLowerCase().substr(8)
    );
  }
  return result;
};

export const filterBySize = (inputList, findSize) => {
  if (findSize === "default") {
    return inputList;
  }
  let result = inputList.filter(
    (a) => a.size === findSize.toUpperCase().substr(4)
  );

  return result;
};

export const executeFilters = (props, sourceList) => {
  data = sourceList;
  let inputList = [...data];
  inputList = sortBy(inputList, props.sortType);
  inputList = filterByMaterial(inputList, props.filterMaterial);
  inputList = filterByDoor(inputList, props.filterDoor);
  inputList = filterByPrice(inputList, props.filterPrice);
  inputList = filterBySize(inputList, props.filterSize);
  return inputList;
};
