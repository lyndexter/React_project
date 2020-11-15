import logo from "../../icons/logo.png";
import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navigation from "./navigations/Navigation";
import Heading from "./heading/Heading";
import CardItem from "../../components/cardItem/CardItem";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Heading />
      <CardItem
        title="BMW"
        description="Super ultra fast car can get max spead 200 km per hour"
        price="1000"
      ></CardItem>
      <Footer />
    </div>
  );
}

export default App;
