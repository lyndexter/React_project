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
import { data } from "../../utils/Source";
import { useLocation, Redirect } from "react-router-dom";
import { Image, Tag, InputNumber, Select, Statistic } from "antd";
import description from "../../utils/DescriptionGenerator";
import {
  findMaterialTag,
  findDoorTag,
  findPriceTag,
  calculateAdditionPrice,
  findSizeTag,
} from "./Utils";

const { Option } = Select;

const Item = () => {
  const [item, setItem] = useState({});
  const [rate, setRate] = useState({ number: 3, sumRate: 8 });
  const [wheelNumber, setWheelNumber] = useState(0);
  const [addition, setAddition] = useState("default");
  const [redirect, setRedirect] = useState(false);

  const location = useLocation();
  const totalPrice = useRef(null);
  const tags = useRef({
    price: "findPriceTag(item)",
    material: "findMaterialTag(item)",
    door: "findDoorTag(item)",
    size: " findSizeTag(item)",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = parseInt(location.search.split("=")[1]);
    const foundItem = data.find((element) => element.id === id);
    const priceTag = findPriceTag(foundItem);
    const materialTag = findMaterialTag(foundItem);
    const doorTag = findDoorTag(foundItem);
    const sizeTag = findSizeTag(foundItem);
    tags.current = {
      price: priceTag,
      material: materialTag,
      door: doorTag,
      size: sizeTag,
    };
    console.log(findPriceTag(foundItem));
    console.log(tags);
    setItem(foundItem);
    totalPrice.current = foundItem.priceInUAH;
  }, []);

  const changeRate = (e) => {
    console.log(tags);
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

  return (
    <StyledItem>
      <TopPart>
        <Image src={item.image} />
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
          onClick={() => setRedirect(true)}
          icon={<IconOnButton icon="arrow-left" />}
        >
          GO Back
        </ButtonItemStyled>
        {redirect && <Redirect push to="/catalog" />}
        <ButtonItemStyled icon={<IconOnButton icon="shopping-cart" />}>
          Add to Cart
        </ButtonItemStyled>
      </BottomPart>
    </StyledItem>
  );
};

export default Item;
