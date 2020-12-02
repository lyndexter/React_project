import { CatalogState } from "./Source";

let data = [];

const comparator = (a, b, standard) => {
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

const sortBy = (inputList, sortType) => {
  if (sortType === "default") {
    return [...data];
  }
  let result = inputList.sort((a, b) => comparator(a, b, sortType));
  return result;
};

const filterByPrice = (inputList, filterPrice) => {
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

const filterByDoor = (inputList, filterDoor) => {
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

const filterByMaterial = (inputList, filterMaterial) => {
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

const filterBySize = (inputList, findSize) => {
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

export const findBy = (sample, source) => {
  sample = sample.toLowerCase();
  let resultList = [];
  source.forEach((item) => {
    switch (true) {
      case item.priceInUAH.toString().includes(sample):
        resultList.push(item);
        break;
      case item.ageGroup.toString().includes(sample):
        resultList.push(item);
        break;
      case item.color.toLowerCase().includes(sample):
        resultList.push(item);
        break;
      case item.size.toLowerCase().includes(sample):
        resultList.push(item);
        break;
      case item.doorCount.toString().includes(sample):
        resultList.push(item);
        break;
      case item.lengthInMM.toString().includes(sample):
        resultList.push(item);
        break;
      case item.material.toLowerCase().includes(sample):
        resultList.push(item);
        break;
      case item.title.toLowerCase().includes(sample):
        resultList.push(item);
        break;
    }
  });
  data = resultList;
  if (sample == "") {
    data = source;
  }
  return data;
};

export const changeCatalogState = (e) => {
  switch (e.item.props.subMenuKey) {
    case "view-menu-":
      CatalogState.currentView = e.key;
      break;
    case "sort-menu-":
      CatalogState.sortType = e.key;
      break;
    case "filterPrice-menu-":
      CatalogState.filterPrice = e.key;
      break;
    case "filterMaterial-menu-":
      CatalogState.filterMaterial = e.key;
      break;
    case "filterDoor-menu-":
      CatalogState.filterDoor = e.key;
      break;
    case "filterSize-menu-":
      CatalogState.filterSize = e.key;
      break;
  }
  return CatalogState;
};
