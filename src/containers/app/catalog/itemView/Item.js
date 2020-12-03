import React, { useState, useEffect, useRef } from "react";
import {
  BottomPart,
  ItemInfo,
  StyledItem,
  StyledPrice,
  TopPart,
  ButtonItemStyled,
  TagContainer,
  DividerStyled,
  TitleStyled,
  DescriptionStyled,
  RateStyled,
  OptionTextStyled,
  SelectStyled,
  IconOnButton,
  StatisticStyled,
  StatisticContainer,
} from "./Item.styled";
import { useLocation, useHistory } from "react-router-dom";
import { Image, Tag, InputNumber, Select } from "antd";
import description from "../../utils/DescriptionGenerator";
import {
  findMaterialTag,
  findDoorTag,
  findPriceTag,
  calculateAdditionPrice,
  findSizeTag,
} from "./Utils";
import { fetchDataById, patchData } from "../../utils/Api";
import LoadPrewiew from "../../../../components/loading/LoadPreview";
import { useDispatch } from "react-redux";
import { createItem } from "../../utils/redux/Action";

const { Option } = Select;

const Item = () => {
  const [item, setItem] = useState({});
  const [rate, setRate] = useState({ number: 0, sumRate: 0 });
  const [wheelNumber, setWheelNumber] = useState(0);
  const [addition, setAddition] = useState("default");
  const dispatch = useDispatch();
  const location = useLocation();
  const totalPrice = useRef(null);
  const tags = useRef({
    price: "findPriceTag(item)",
    material: "findMaterialTag(item)",
    door: "findDoorTag(item)",
    size: " findSizeTag(item)",
  });

  let history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);

    const id = parseInt(location.search.split("=")[1]);
    fetchDataById(id)
      .then(([foundItem]) => {
        foundItem.wanted++;
        setItem(foundItem);
        patchData(foundItem);
      })
      .catch(() => {
        console.log("cant download element");
      });
  }, []);

  useEffect(() => {
    if (item === undefined) {
      return;
    }
    tags.current = {
      price: findPriceTag(item),
      material: findMaterialTag(item),
      door: findDoorTag(item),
      size: findSizeTag(item),
    };
    setRate({
      number: item.numberMarks,
      sumRate: item.rate,
    });
    totalPrice.current = item.priceInUAH;
  }, [item]);

  const changeRate = (e) => {
    const newRate = {
      number: ++rate.number,
      sumRate: rate.sumRate + e,
    };
    setRate(newRate);
  };

  const calculatePrice = (e) => {
    let localAddition = addition;
    let localWheelNumber = wheelNumber;
    if (isNaN(e)) {
      localAddition = e.toLowerCase();
      setAddition(e.toLowerCase());
    } else {
      localWheelNumber = e;
      setWheelNumber(e);
    }
    totalPrice.current =
      item.priceInUAH + calculateAdditionPrice(localAddition, localWheelNumber);
  };

  const goToCard = () => {
    dispatch(
      createItem({
        id: item.id,
        title: item.title,
        priceInUAH: totalPrice.current,
        imageSrc: item.imageSrc,
        number: 1,
      })
    );
  };

  if (Object.keys(item).length === 0) {
    return <LoadPrewiew />;
  }

  return (
    <StyledItem>
      <TopPart>
        <Image src={item.imageSrc} />
        <ItemInfo>
          <TagContainer>
            <Tag color="blue">{tags.current.price}</Tag>
            {tags.current.material !== "" && (
              <Tag color="green">{tags.current.material}</Tag>
            )}
            {tags.current.door !== "" && (
              <Tag color="volcano">{tags.current.door}</Tag>
            )}
            {tags.current.size !== "" && (
              <Tag color="yellow">{tags.current.size}</Tag>
            )}
          </TagContainer>
          <DividerStyled />
          <TitleStyled>{item.title}</TitleStyled>
          <RateStyled
            allowHalf
            onChange={changeRate}
            value={rate.sumRate / rate.number}
          />
          <DescriptionStyled>{description(item)}</DescriptionStyled>

          <OptionTextStyled>Reserve Wheels:</OptionTextStyled>
          <InputNumber
            min={0}
            max={12}
            defaultValue={0}
            onChange={calculatePrice}
          />
          <br />
          <OptionTextStyled>Additional Options:</OptionTextStyled>
          <SelectStyled onChange={calculatePrice}>
            <Option value="cloth">Cleaning Cloth</Option>
            <Option value="agent">Cleaning Agent</Option>
            <Option value="stand">Stand</Option>
            <Option value="standAndAgent">Stand With Cleaning Agent</Option>
            <Option value="standAndCloth">Stand With Cleaning Cloth</Option>
          </SelectStyled>
        </ItemInfo>
      </TopPart>
      <StatisticContainer>
        <StatisticStyled title="Users looked for it" value={item.wanted} />
        <StatisticStyled title="Users bought it" value={item.bought} />
      </StatisticContainer>
      <BottomPart>
        <StyledPrice>Price: {totalPrice.current} UAH</StyledPrice>
        <ButtonItemStyled
          onClick={history.goBack}
          icon={<IconOnButton icon="arrow-left" />}
        >
          GO Back
        </ButtonItemStyled>
        <ButtonItemStyled
          onClick={goToCard}
          icon={<IconOnButton icon="shopping-cart" />}
        >
          Add to Cart
        </ButtonItemStyled>
      </BottomPart>
    </StyledItem>
  );
};

export default Item;
