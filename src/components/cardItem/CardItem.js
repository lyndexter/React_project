import React from "react";
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
import "antd/dist/antd.css";

const CardItem = ({ title, description, imageSrc, price }) => {
  return (
    <div>
      <CardStyled hoverable cover={<CardImage alt="Toy Car" src={imageSrc} />}>
        <Footer>
          <MetaStyled title={title} description={description} />
          <TextStyled>Price: ${price}UAH</TextStyled>
          <Info title={title} description={description} />
        </Footer>
      </CardStyled>
    </div>
  );
};

export default CardItem;

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: props.title,
      description: props.description,
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <ButtonStyled onClick={this.showDrawer}>Read More</ButtonStyled>
        <MoreInfo height={this.state.visible}>
          <MetaStyled
            title={this.state.title}
            description={this.state.description}
          />
          <ButtonLessStyled onClick={this.onClose}>Show Less</ButtonLessStyled>
        </MoreInfo>
      </div>
    );
  }
}
