export const findPriceTag = (item) => {
  if (item.priceInUAH < 100) {
    return "Price lower 100";
  } else if (item.priceInUAH < 200) {
    return "Price over 100";
  } else if (item.priceInUAH < 500) {
    return "Price over 200";
  } else {
    return "Price over 500";
  }
};

export const findDoorTag = (item) => {
  if (item.doorCount === 2) {
    return "2 Door car";
  } else if (item.doorCount === 4) {
    return "4 Door car";
  }
  return "";
};

export const findMaterialTag = (item) => {
  if (item.material === "metal") {
    return "Made of metal";
  } else if (item.material === "plastic") {
    return "Made of plastic";
  } else if (item.material === "carbon") {
    return "Made of carbon";
  } else if (item.material === "wood") {
    return "Made of wood";
  } else if (item.material === "polisterol") {
    return "Made of polisterol";
  }
  return "";
};

export const findSizeTag = (item) => {
  if (item.size === "SMALL") {
    return "Small";
  } else if (item.size === "MEDIUM") {
    return "Medium";
  } else if (item.size === "LARGE") {
    return "Large";
  }
  return "";
};

const priceOfOptions = {
  cloth: 60,
  agent: 120,
  stand: 100,
  wheel: 20,
  default: 0,
};

export const calculateAdditionPrice = (addition, wheelNumber) => {
  let optionPrice = 0;
  if (addition.includes("cloth")) {
    optionPrice += priceOfOptions["cloth"];
  }
  if (addition.includes("agent")) {
    optionPrice += priceOfOptions["agent"];
  }
  if (addition.includes("stand")) {
    optionPrice += priceOfOptions["stand"];
  }
  optionPrice += priceOfOptions["wheel"] * wheelNumber;
  return optionPrice;
};
