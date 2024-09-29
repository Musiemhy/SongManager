import React from "react";
import { Link } from "react-router-dom";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
  CTASecondaryButton,
} from "../styles";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Your Ultimate Music Collection</HeroTitle>
        <HeroSubtitle>
          Discover, Manage, and Enjoy Your Favorite Tracks. Stay in Control of
          Your Playlist Anytime, Anywhere.
        </HeroSubtitle>
        <div>
          <Link to="/login">
            <CTAButton primary>Explore Songs</CTAButton>
          </Link>
          <Link to="/login">
            <CTASecondaryButton>Upload Your Music</CTASecondaryButton>
          </Link>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
