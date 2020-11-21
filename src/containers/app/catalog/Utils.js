let constsortType = "default";
let constfilterPrice = "all";
let constfilterMaterial = "all";
let constfilterDoor = "all";

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

export const sortBy = (inputList) => {
  let standard = constsortType;
  if (standard === "default") {
    return [...data];
  }
  let result = inputList.sort((a, b) => comparator(a, b, standard));
  return result;
};

export const filterByPrice = (inputList) => {
  if (constfilterPrice === "all") {
    return inputList;
  }
  let result = [];

  switch (constfilterPrice) {
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

export const filterByDoor = (inputList) => {
  if (constfilterDoor === "all") {
    return inputList;
  }
  if (constfilterDoor === "doorsMore") {
    let result = inputList.filter(
      (a) => a.doorCount != "2" && a.doorCount != "4"
    );
    return result;
  }

  let result = inputList.filter(
    (a) => a.doorCount == constfilterDoor.substr(5)
  );

  return result;
};

export const filterByMaterial = (inputList) => {
  if (constfilterMaterial === "all") {
    return inputList;
  }
  let result = [];
  if (constfilterMaterial === "materialOthers") {
    result = inputList.filter(
      (a) =>
        a.material !== "metal" &&
        a.material !== "plastic" &&
        a.material !== "carbon"
    );
  } else {
    result = inputList.filter(
      (a) => a.material === constfilterMaterial.toLowerCase().substr(8)
    );
  }
  return result;
};

export const diFilters = () => {
  let inputList = [...data];
  inputList = sortBy(inputList);
  console.log("start show", inputList);
  inputList = filterByMaterial(inputList);
  console.log("test1", inputList);
  inputList = filterByDoor(inputList);
  console.log("test2", inputList);
  inputList = filterByPrice(inputList);
  setToys(inputList);
  console.log("end show", inputList);
};

export const handleInput = (e) => {
  console.log("click", e);

  let sample = e;
  let resultList = [];
  sourcedate.forEach((item) => {
    switch (true) {
      case item.priceInUAH.toString().includes(sample):
        resultList.push(item);
        break;
      case item.ageGroup.toString().includes(sample):
        resultList.push(item);
        break;
      case item.color.includes(sample):
        resultList.push(item);
        break;
      case item.size.includes(sample):
        resultList.push(item);
        break;
      case item.doorCount.toString().includes(sample):
        resultList.push(item);
        break;
      case item.lengthInMM.toString().includes(sample):
        resultList.push(item);
        break;
      case item.material.includes(sample):
        resultList.push(item);
        break;
      case item.title.includes(sample):
        resultList.push(item);
        break;
    }
  });
  data = resultList;
  if (sample == "") {
    data = sourcedate;
  }
  console.log(data);
  diFilters();
};

export const handleClick = (e) => {
  console.log("click ", e);

  switch (e.item.props.subMenuKey) {
    case "view-menu-":
      if (e.key === "image") {
        setCurrentView("image");
      } else {
        setCurrentView("card");
      }
      break;
    case "sort-menu-":
      setSortType(e.key);
      constsortType = e.key;
      break;
    case "filterPrice-menu-":
      setFilterPrice(e.key);
      constfilterPrice = e.key;
      break;
    case "filterMaterial-menu-":
      setFilterMaterial(e.key);
      constfilterMaterial = e.key;
      break;
    case "filterDoor-menu-":
      setFilterDoor(e.key);
      constfilterDoor = e.key;
      break;
  }
  diFilters();
  console.log("click ", e);
};

export const resetDefault = (e) => {
  console.log("click", e);
  switch (e.item.props.subMenuKey) {
    case "sort-menu-":
      setSortType("default");
      constsortType = "default";
      break;
    case "filterPrice-menu-":
      setFilterPrice("all");
      constfilterPrice = "all";
      break;
    case "filterMaterial-menu-":
      setFilterMaterial("all");
      constfilterMaterial = "all";
      break;
    case "filterDoor-menu-":
      setFilterDoor("all");
      constfilterDoor = "all";
      break;
  }
  diFilters();
};
