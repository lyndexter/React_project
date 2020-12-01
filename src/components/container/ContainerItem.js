import React from "react";
import { EntityContainer } from "./ContainerItem.styled";
import CardItem from "../cardItem/CardItem";
import ImageItem from "../imageItem/ImageItem";
import { Flipper, Flipped } from "react-flip-toolkit";

const ContainerItem = ({ toys, currentView }) => {
  return (
    <Flipper flipKey={toys}>
      <EntityContainer>
        {toys.map((toyCar) => {
          if (currentView === "image") {
            return (
              <Flipped key={toyCar.id} flipId={toyCar.id}>
                <div>
                  <ImageItem toyCar={toyCar} />
                </div>
              </Flipped>
            );
          } else {
            return (
              <Flipped key={toyCar.id} flipId={toyCar.id}>
                <div>
                  <CardItem toyCar={toyCar} />
                </div>
              </Flipped>
            );
          }
        })}
      </EntityContainer>
    </Flipper>
  );
};

export default ContainerItem;
