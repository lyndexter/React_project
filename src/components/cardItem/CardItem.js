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
import { Redirect } from "react-router-dom";

const CardItem = ({ toyCar }) => {
  return (
    <div>
      <CardStyled
        hoverable
        cover={<CardImage alt="Toy Car" src={toyCar.image} />}
      >
        <Footer>
          <MetaStyled title={toyCar.title} description={toyCar.description} />
          <TextStyled>Price: ${toyCar.priceInUAH}UAH</TextStyled>
          <Info toyCar={toyCar} />
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
      redirect: false,
      visible: false,
      title: props.toyCar.title,
      description: `${props.toyCar.description} This car is made 
      of ${props.toyCar.material}.
      This toy is from ${props.toyCar.size} category and his 
      length is ${props.toyCar.lengthInMM} mm.
      Car has ${props.toyCar.doorCount} doors, and his potential age group 
      is ${props.toyCar.ageGroup} years old.
      And price af this great toy is only ${props.toyCar.priceInUAH} UAH`,
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

  goToItem = () => {
    this.setState({ redirect: true });
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
          <ButtonStyled onClick={this.goToItem}>Open In Page</ButtonStyled>
          <ButtonLessStyled onClick={this.onClose}>Show Less</ButtonLessStyled>
          {this.state.redirect && <Redirect to="/card" />}
        </MoreInfo>
      </div>
    );
  }
}
