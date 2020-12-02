import React, { useState } from "react";
import LoadingElement from "./Loading";
import { CenterContainer, MessegeInfo } from "./LoadPreview.styled";

const LoadPrewiew = ({
  title = "Not Found",
  description = "Please try again later",
}) => {
  const [load, setLoad] = useState(false);
  setTimeout(() => {
    setLoad(true);
  }, 5000);
  console.log(load);
  if (!load) {
    return <LoadingElement />;
  }
  return (
    <CenterContainer>
      <MessegeInfo>{title}</MessegeInfo>
      <MessegeInfo>{description}</MessegeInfo>
    </CenterContainer>
  );
};

export default LoadPrewiew;
