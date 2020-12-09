import React from "react";
import {
  HeadingContainer,
  FunctionalMenu,
  Header,
  DescriptionStyled,
  TextStyled,
} from "./Heading.styled";
import Clock from "../../../../components/headingImage/HeadingImage";

const Heading = () => {
  return (
    <HeadingContainer>
      <Clock />
      <FunctionalMenu>
        <Header>Shop Toy Car</Header>
        <DescriptionStyled>
          <TextStyled>
            We sell only high quality toy cars from premium material. If you buy
            our car you will enjoy its design, ergonomics,and his unsurpassed
            appearance.
          </TextStyled>
        </DescriptionStyled>
      </FunctionalMenu>
    </HeadingContainer>
  );
};

export default Heading;
