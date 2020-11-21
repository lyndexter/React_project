import React, { useState } from "react";
import {
  ButtonStyled,
  ImageCard,
  InfoContainer,
  InfoDescription,
  InfoFooter,
  InfoHeader,
  InfoPrice,
  MainInfo,
  TitleInfo,
} from "./ImageItem.styled";
import { Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";

const ImageItem = (props) => {
  const [isShown, setIsShown] = useState(-1);
  const [redirect, setRedirect] = useState(false);
  let toyCar = props.toyCar;

  const goToItem = () => {
    setRedirect(true);
  };

  return (
    <ImageCard>
      <Image
        src={toyCar.image}
        onMouseEnter={() => setIsShown(toyCar.id)}
        onMouseLeave={() => setIsShown(-1)}
      />
      {isShown === toyCar.id && (
        <InfoContainer
          onMouseEnter={() => setIsShown(toyCar.id)}
          onMouseLeave={() => setIsShown(-1)}
        >
          <InfoHeader>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </InfoHeader>
          <MainInfo>
            <TitleInfo>{toyCar.title}</TitleInfo>
            <InfoDescription>
              {toyCar.description} This car is made of {toyCar.material}. This
              toy is from {toyCar.size} category and his length is{" "}
              {toyCar.lengthInMM} mm. Car has {toyCar.doorCount} doors, and his
              potential age group is {toyCar.ageGroup} years old.
            </InfoDescription>
            <InfoPrice>{toyCar.priceInUAH} UAH</InfoPrice>
            <ButtonStyled onClick={goToItem}>Open In Page</ButtonStyled>
            {redirect && <Redirect to="/card" />}
          </MainInfo>
          <InfoFooter>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </InfoFooter>
        </InfoContainer>
      )}
    </ImageCard>
  );
};

export default ImageItem;
