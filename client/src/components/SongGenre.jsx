import React from "react";
import {
  Artist_Genre_Container,
  Artist_Genre_title,
  Artist_Genre_desc,
  Genre_Content,
} from "../styles";
import Card from "./Card";

const SongGenre = () => {
  return (
    <Artist_Genre_Container>
      <Artist_Genre_title> Discover by Genre</Artist_Genre_title>
      <Artist_Genre_desc>
        Dive into a world of music by genre. Whether you're in the mood for some
        smooth jazz, energetic rock, soulful R&B, or upbeat electronic, our
        collection spans all genres.
      </Artist_Genre_desc>
      <Genre_Content>
        <Card coverImage="../../pop.jpg" title="Pop" />
        <Card coverImage="../../rap.jpg" title="Hip-Pop" />
        <Card coverImage="../../afrobeat.jpg" title="Afrobeat" />
        <Card coverImage="../../reggae.jpg" title="Reggae" />
        <Card coverImage="../../classic.jpg" title="Classical" />
        <Card coverImage="../../other.jpg" title="Others" />
      </Genre_Content>
    </Artist_Genre_Container>
  );
};

export default SongGenre;
