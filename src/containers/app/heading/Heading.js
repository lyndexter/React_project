import React from "react";
import {
  ImageStyled,
  HeadingContainer,
  FunctionalMenu,
  Header,
  InputsStyled,
  Input,
} from "./Heading.styled";
import photo1 from "../../../icons/heading_photo1.jpg";

const Heading = () => {
  return (
    <HeadingContainer>
      <ImageStyled src={photo1} />
      <FunctionalMenu>
        <Header>Search Toy Car</Header>
        <InputsStyled>
          <Input defaultValue="write age group" />
          <Input defaultValue="write price" />
          <Input defaultValue="write color" />
        </InputsStyled>
      </FunctionalMenu>
    </HeadingContainer>
  );
};

export default Heading;
