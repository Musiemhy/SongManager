import React from "react";
import { CardItemContainer, CardImage, CardName } from "../styles";

const Card = ({ coverImage, title }) => {
  return (
    <CardItemContainer>
      <CardImage src={coverImage} alt={title} />
      <CardName>{title}</CardName>
    </CardItemContainer>
  );
};

export default Card;
