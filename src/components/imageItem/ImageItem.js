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
import { useHistory } from "react-router-dom";
import description from "../../containers/app/utils/DescriptionGenerator";

const ImageItem = (props) => {
  const [isShown, setIsShown] = useState(-1);
  let history = useHistory();
  let toyCar = props.toyCar;

  return (
    <ImageCard>
      <Image
        src={toyCar.imageSrc}
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
            <InfoDescription>{description(toyCar)}</InfoDescription>
            <InfoPrice>{toyCar.priceInUAH} UAH</InfoPrice>
            <ButtonStyled onClick={() => history.push(`/item?id=${toyCar.id}`)}>
              Open In Page
            </ButtonStyled>
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
