import car1 from "../../../images/car1.jpg";
import car2 from "../../../images/car2.jpg";
import car3 from "../../../images/car3.jpg";
import car4 from "../../../images/car4.jpg";
import car5 from "../../../images/car5.jpg";
import car6 from "../../../images/car6.jpg";
import car7 from "../../../images/car7.jpg";
import car8 from "../../../images/car8.jpg";

export const setImages = (initialData) => {
  initialData.forEach((item) => {
    switch (parseInt(item.image)) {
      case 1:
        item.image = car1;
        break;
      case 2:
        item.image = car2;
        break;
      case 3:
        item.image = car3;
        break;
      case 4:
        item.image = car4;
        break;
      case 5:
        item.image = car5;
        break;
      case 6:
        item.image = car6;
        break;
      case 7:
        item.image = car7;
        break;
      case 8:
        item.image = car8;
        break;
    }
  });
  return initialData;
};
