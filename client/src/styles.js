import styled from "@emotion/styled";
import { space, layout, flexbox, style } from "styled-system";
import { keyframes } from "@emotion/react";

// this is style for card
export const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  height: 100%;
`;

export const CardName = styled.div`
  font-weight: bolder;
  font-size: larger;
  flex-basis: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const CardImage = styled.img`
  flex-basis: 90%;
  width: 100%;
  height: auto;
  max-height: 90%;
  object-fit: cover;
  transition: 0.2s ease-in-out;
  z-index: 1;
`;

// this is style for cardItem
const anim = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;
export const CardText = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: 0.2s ease-in-out;
  z-index: 2;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  min-width: 150px;
  max-width: 300px;
  min-height: 250px;
  max-height: 350px;
  background: url(${(props) => props.image}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  transition: 0.2s ease-in-out;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.04) rotate(-1deg);
    background-size: cover;
  }

  &:hover ${CardText} {
    opacity: 1;
  }
`;

export const CardTitle = styled.h3``;
export const CardArtist = styled.h3``;
export const CardAlbum = styled.h5``;
export const CardGenre = styled.h3``;
export const CardReleaseDate = styled.p``;
export const CardDuration = styled.p``;

//both HeaderContainer and OtherPages are styles specific for header page
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  ${flexbox};
`;
export const OtherPages = styled.div`
  ${space};
`;

//style for all links
export const StyledLink = styled.a`
  margin-left: 15px;
  text-decoration: none;
  color: inherit;
`;

//style for all login button
export const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

// Hero Section Styles
export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("../../herosection2.jpg"); /* Photo by <a href="https://unsplash.com/@rocinante_11?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mick Haupt</a> on <a href="https://unsplash.com/photos/books-in-library-vGXHIh3URzc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>*/
  background-size: cover;
  background-position: center;
  color: #f9f9f9;
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 20px;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

//style for all primary cta button
export const CTAButton = styled.button`
  padding: 15px 30px;
  background-color: ${(props) => (props.primary ? "#007BFF" : "#2ecc71")};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? "#2980b9" : "#27ae60")};
  }
`;

//style for all secondary cta button
export const CTASecondaryButton = styled(CTAButton)`
  background-color: #28a745;

  &:hover {
    background-color: #27ae60;
  }
`;

//style for song by artists and genres section of home page
export const SongChoice = styled.div`
  padding: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../songGenre.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
    opacity: 0.6;
    z-index: -1;
  }
`;
export const Artist_Genre_Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Artist_Genre_title = styled.h2`
  text-align: center;
  color: aliceblue;
`;
export const Artist_Genre_desc = styled.p`
  text-align: center;
  margin: 10px 25%;
  color: aliceblue;
`;

export const Artist_Content = styled.div`
  display: grid;
  grid-template-columns: 16% 16% 16% 16% 16%;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px;
  margin: 30px 7%;
  width: 100%;
`;

export const Genre_Content = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25%;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px;
  margin: 30px 10%;
  width: 100%;
`;

export const Artist_Genre_Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

//style for card lists in list page and others
export const cardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;
