import React from "react";
import {
  ImageStyled,
  HeadingContainer,
  FunctionalMenu,
  Header,
  InputsStyled,
  Input,
} from "./Heading.styled";
import photo1 from "../../../images/heading_photo1.jpg";
import photo2 from "../../../images/heading_photo2.jpg";
import photo3 from "../../../images/heading_photo3.jpg";

const Heading = () => {
  return (
    <HeadingContainer>
      <Clock />
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

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image_number: 1 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ image_number: ((this.state.image_number + 1) % 3) + 1 });
  }

  render() {
    let photo;

    switch (this.state.image_number) {
      case 1:
        photo = photo1;
        break;
      case 2:
        photo = photo2;
        break;
      case 3:
        photo = photo3;
        break;
    }
    return <ImageStyled src={photo} />;
  }
}
