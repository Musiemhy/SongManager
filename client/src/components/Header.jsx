import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import {
  HeaderContainer,
  OtherPages,
  StyledLink,
  LoginButton,
  WelcomeHeader,
} from "../styles";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {localStorage.getItem("name") ? (
        <HeaderContainer>
          <OtherPages>
            <WelcomeHeader>Song Manager</WelcomeHeader>
          </OtherPages>
          <div className="profile">
            <LoginButton onClick={toggleClick}>
              {localStorage.getItem("name")}
            </LoginButton>
            <div
              className="profile-detail"
              style={{ display: isClicked ? "inline" : "none" }}
            >
              <Dropdown />
            </div>
          </div>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <OtherPages>
            <StyledLink as={Link} to="/">
              Home
            </StyledLink>
            <StyledLink as={Link} to="/about">
              About
            </StyledLink>
          </OtherPages>
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
        </HeaderContainer>
      )}
    </div>
  );
};

export default Header;
