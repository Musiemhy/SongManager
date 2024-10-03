import React from "react";
import { Link } from "react-router-dom";
import { CardItemContainer, CardLink, CardIcon, CardName } from "../styles";

const Card = ({ coverImage, title }) => {
  return (
    <CardLink to="/login">
      <CardItemContainer>
        <CardIcon src={coverImage} alt={title} />
        <CardName>{title}</CardName>
      </CardItemContainer>
    </CardLink>
  );
};

export default Card;
