import React, { useState } from "react";
import {
  Footer,
  CardStyled,
  ButtonStyled,
  CardImage,
  MetaStyled,
  TextStyled,
  MoreInfo,
  ButtonLessStyled,
} from "./CardItem.styled";
import { useHistory } from "react-router-dom";
import description from "../../containers/app/utils/DescriptionGenerator";

const CardItem = ({ toyCar }) => {
  return (
    <div>
      <CardStyled
        hoverable
        cover={<CardImage alt="Toy Car" src={toyCar.imageSrc} />}
      >
        <Footer>
          <MetaStyled title={toyCar.title} description={toyCar.description} />
          <TextStyled>Price: {toyCar.priceInUAH} UAH</TextStyled>
          <AllInfo toyCar={toyCar} />
        </Footer>
      </CardStyled>
    </div>
  );
};

export default CardItem;

const AllInfo = ({ toyCar }) => {
  const [visible, setVisible] = useState(false);

  let history = useHistory();

  return (
    <React.Fragment>
      <ButtonStyled onClick={() => setVisible(true)}>Read More</ButtonStyled>
      <MoreInfo height={visible ? 1 : 0}>
        <MetaStyled title={toyCar.title} description={description(toyCar)} />
        <ButtonStyled
          onClick={() => {
            history.push(`/item?id=${toyCar.id}`);
          }}
        >
          Open In Page
        </ButtonStyled>
        <ButtonLessStyled
          onClick={() => {
            setVisible(false);
          }}
        >
          Show Less
        </ButtonLessStyled>
      </MoreInfo>
    </React.Fragment>
  );
};
