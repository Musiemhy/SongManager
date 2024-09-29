import React from "react";
import {
  CardContainer,
  CardText,
  CardImage,
  CardTitle,
  CardArtist,
  CardAlbum,
  CardGenre,
  CardReleaseDate,
  CardDuration,
} from "../styles";

const CardItem = ({
  coverImage,
  title,
  artist,
  album,
  genre,
  releaseDate,
  duration,
}) => {
  return (
    <CardContainer>
      <CardImage src={coverImage} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardArtist>{artist}</CardArtist>
        <CardAlbum>{album}</CardAlbum>
        <CardGenre>{genre}</CardGenre>
        <CardReleaseDate>{releaseDate}</CardReleaseDate>
        <CardDuration>{duration}</CardDuration>
      </CardText>
    </CardContainer>
  );
};

export default CardItem;
