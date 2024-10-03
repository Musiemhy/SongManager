import styled from "@emotion/styled";
import { space, flexbox } from "styled-system";
import { keyframes } from "@emotion/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

// this is style for card and cardItem
export const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  height: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;
export const CardContainer = styled.div`
  width: 100%;
  min-width: 150px;
  max-width: 300px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.04) rotate(-1deg);
  }
`;
export const CardLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  color: inherit;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: 0.3s ease-in-out;

  // Blur effect on hover
  ${CardContainer}:hover & {
    filter: blur(5px);
  }
`;
export const CardIcon = styled.img`
  flex-basis: 90%;
  width: 100%;
  height: auto;
  max-height: 90%;
  object-fit: cover;
  transition: 0.2s ease-in-out;
  z-index: 1;
`;
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
  position: relative;
  z-index: 2;
  opacity: 0;
  text-align: center;
  padding: 15px;
  color: white;
  transition: opacity 0.3s ease-in-out;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;
export const CardTitle = styled.h5`
  margin: 5px 0;
`;
export const CardArtist = styled.h5`
  margin: 5px 0;
`;
export const CardAlbum = styled.p`
  margin: 5px 0;
`;
export const CardGenre = styled.p`
  margin: 5px 0;
`;
export const CardReleaseDate = styled.p`
  margin: 5px 0;
`;
export const CardDuration = styled.p`
  margin: 5px 0;
`;

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
//style for the dropdown menu in the header
export const DropdownCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    to bottom,
    #add8e6,
    #c6e0f0,
    #dee9f7,
    #f1f3fb,
    #ffffff
  );
  overflow: hidden;
`;
export const DropdownUnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const DropdownList = styled.li`
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;
export const DropdownBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f5f5dc;
    color: lightblue;
  }
`;
export const DropdownIcon = styled.svg`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  stroke: #333;
  fill: none;
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
  font-size: xx-large;
`;
export const Artist_Genre_desc = styled.p`
  text-align: center;
  margin: 10px 25%;
  color: aliceblue;
  font-size: large;
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

//style for register and login pages
export const Register_Login_Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
`;
export const Register_Login_Image = styled.div`
  flex-basis: 50%;
  background-image: url(../../songArtist.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0;
`;
export const Register_Login_Data = styled.div`
  flex-basis: 50%;
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  box-sizing: border-box;
`;
export const Register_Login_Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  justify-content: flex-end;
  width: 100%;
  margin-right: 5%;
`;
export const Register_Login_title = styled.div`
  margin-bottom: 2%;
  font-size: 1.5rem;
`;
export const Register_Login_desc = styled.span`
  color: #e56d4b;
  text-decoration: underline;
  font-size: 0.9rem;
`;
export const Register_Login_Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const Register_Login_Foritem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Register_Login_Formlabel = styled.label`
  font-weight: 900;
  display: block;
  margin-bottom: 2%;
`;
export const Register_Login_Forminput = styled.input`
  padding: 10px 40px;
  margin-bottom: 5%;
  text-align: center;
  border: 1px solid #5d4037;
  border-radius: 5px;
  width: 80%;
`;
export const Register_Login_Formtoggle = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: #e56d4b;
  padding: 0px;
  margin: 0px;
`;
export const Register_Login_Formerror = styled.div`
  color: red;
  margin-top: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
`;

//style for card lists in list page and others
export const CardList = styled.div``;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ListContent = styled.div`
  background-color: #f5f5dc;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(210, 210, 210, 0.47);
  padding: 2%;
  margin: 2%;
`;
export const AddSong = styled.div`
  display: flex;
  justify-content: center;
  margin: 5%;
`;
export const AppBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1% 2%;
  margin: 0px 2%;
`;
export const FilterSong = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1% 2%;
  margin: 0px 2%;
`;
export const Artist_Genre_Filter = styled.select`
  padding: 1% 2%;
  margin: 0px 2%;
`;
export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
export const WelcomeHeader = styled.h2`
  margin: 0px;
`;

//style for about us page
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const AboutContent = styled.div`
  background-image: url("../../songGenre.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const AboutCard = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.5);
  padding: 3%;
  margin: 20px;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
`;
export const AboutPara = styled.p`
  margin: 0 5%;
  color: #f5f5f5;
  font-size: 1.125rem; /* Equivalent to 18px */
  line-height: 1.8;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust for smaller screens */
  }
`;
export const AboutUL = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;
`;
export const AboutList = styled.li`
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 1.8;
  color: #ccc;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
    color: #121212;
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size for smaller screens */
  }
`;

//style for form modal for add and update songs
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export const FormContent = styled.form`
  background-color: lightblue;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.8);
  box-shadow: 2px 4px 10px 1px rgba(210, 210, 210, 0.8);
  padding: 3%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto;
`;
export const FormItem1 = styled.div`
  grid-column: 1/-1;
`;
export const FormItem2 = styled.div`
  grid-column: 1/-1;
`;
export const FormItem3 = styled.div`
  grid-column: 1/2;
`;
export const FormItem4 = styled.div`
  grid-column: 2/-1;
`;
export const FormItem5 = styled.div`
  grid-column: 1/2;
`;
export const FormItem6 = styled.div`
  grid-column: 2/-1;
`;
export const FormItem7 = styled.div`
  grid-column: 1/-1;
`;
export const FormItem8 = styled.div`
  grid-column: 1/-1;
`;
export const FormButton = styled.button`
  background-color: #003366;
  padding: 2% 7%;
  font-weight: bold;
  color: #f5f5dc;
  margin: 0px 15px;
`;
export const FormLabel = styled.label`
  font-weight: bold;
  font-size: large;
  display: block;
  color: #003366;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 5vh;
  text-align: center;
  margin-top: 3%;
`;
export const FormSelect = styled.select`
  width: 100%;
  text-align: center;
  margin-top: 3%;
  padding: 5%;
`;
export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 5px 6px 10px 0px;
  margin-top: 3%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

//style for modal
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  height: 80%;
  width: fit-content;
  overflow-y: scroll;
`;
export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #f00;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin: 0;
`;
export const DeleteContainer = styled.div`
  margin-top: 20%;
`;
export const DeleteQuestion = styled.p`
  font-weight: bolder;
  font-size: 24px;
  color: #f00;
`;
export const DeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
`;

//Style for table
export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 15px;
`;
export const TableTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TableImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-right: 8px;
`;
export const EditBtn = styled.button`
  padding: 2px 5px;
  border-radius: 5px;
  color: darkblue;
  border: 1px dotted rgba(0, 0, 139, 0.597);
  cursor: pointer;
`;
export const DeleteBtn = styled.button`
  padding: 2px 5px;
  border-radius: 5px;
  color: crimson;
  border: 1px dotted rgba(220, 20, 60, 0.6);
  cursor: pointer;
`;

//style for spinner
const dot1Move = keyframes`
  20% { transform: scale(1); }
  45% { transform: translate(16px, 12px) scale(0.45); }
  60% { transform: translate(80px, 60px) scale(0.45); }
  80% { transform: translate(80px, 60px) scale(0.45); }
  100% { transform: translateY(0px) scale(1); }
`;
const dot2Move = keyframes`
  20% { transform: scale(1); }
  45% { transform: translate(-16px, 12px) scale(0.45); }
  60% { transform: translate(-80px, 60px) scale(0.45); }
  80% { transform: translate(-80px, 60px) scale(0.45); }
  100% { transform: translateY(0px) scale(1); }
`;
const dot3Move = keyframes`
  20% { transform: scale(1); }
  45% { transform: translateY(-18px) scale(0.45); }
  60% { transform: translateY(-90px) scale(0.45); }
  80% { transform: translateY(-90px) scale(0.45); }
  100% { transform: translateY(0px) scale(1); }
`;
const rotateMove = keyframes`
  55% { transform: translate(-50%, -50%) rotate(0deg); }
  80% { transform: translate(-50%, -50%) rotate(360deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;
const index = keyframes`
  0%, 100% { z-index: 3; }
  33.3% { z-index: 2; }
  66.6% { z-index: 1; }
`;
export const SpinnerBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
export const SpinnerContainer = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  filter: url("#goo");
  animation: ${rotateMove} 2s ease-in-out infinite;
`;
export const SpinnerSvg = styled.svg``;
export const Dot = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
export const Dot1 = styled(Dot)`
  background-color: #ffc400;
  animation: ${dot1Move} 2s ease infinite, ${index} 6s -2s ease infinite;
`;
export const Dot2 = styled(Dot)`
  background-color: #0051ff;
  animation: ${dot2Move} 2s ease infinite, ${index} 6s -4s ease infinite;
`;
export const Dot3 = styled(Dot)`
  background-color: #ff1717;
  animation: ${dot3Move} 2s ease infinite, ${index} 6s ease infinite;
`;
