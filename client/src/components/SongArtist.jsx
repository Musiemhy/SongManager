import React from "react";
import { Link } from "react-router-dom";
import {
  Artist_Genre_Container,
  Artist_Genre_title,
  Artist_Genre_desc,
  Artist_Content,
  Artist_Genre_Button,
  CTAButton,
} from "../styles";
import Card from "./Card";

const SongArtist = () => {
  return (
    <Artist_Genre_Container>
      <Artist_Genre_title>Browse by Artist</Artist_Genre_title>
      <Artist_Genre_desc>
        Explore your favorite tracks, organized by the artists you love. From
        rising stars to global icons, easily discover music by browsing through
        a curated list of artists.
      </Artist_Genre_desc>
      <Artist_Content>
        <Card coverImage="../../The_Weeknd.jfif" title="The Weeknd" />
        <Card coverImage="../../David_Guetta.jfif" title="David Guetta" />
        <Card coverImage="../../Kanye.jfif" title="Kanye West" />
        <Card coverImage="../../Drake.jfif" title="Drake" />
        <Card coverImage="../../Coldplay.jfif" title="Coldplay" />
        <Card coverImage="../../Ariana_Grande.jfif" title="Ariana Grande" />
        <Card coverImage="../../Rihanna.jfif" title="Rihanna" />
        <Card coverImage="../../Eminem.jfif" title="Eminem" />
        <Card coverImage="../../Post_Malone.jfif" title="Post Malone" />
        <Card coverImage="../../Juice_WRLD.jfif" title="Juice WRLD" />
      </Artist_Content>
      <Artist_Genre_Button>
        <Link to="/login">
          <CTAButton primary>More Artists</CTAButton>
        </Link>
      </Artist_Genre_Button>
    </Artist_Genre_Container>
  );
};

export default SongArtist;
