import React from "react";
import { CardItemContainer, CardIcon, CardName } from "../styles";

const Card = ({ coverImage, title }) => {
  return (
    <CardItemContainer>
      <CardIcon src={coverImage} alt={title} />
      <CardName>{title}</CardName>
    </CardItemContainer>
  );
};

export default Card;
