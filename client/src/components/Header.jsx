import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import {
  HeaderContainer,
  OtherPages,
  StyledLink,
  LoginButton,
} from "../styles";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <HeaderContainer>
      <OtherPages>
        <StyledLink as={Link} to="/">
          Home
        </StyledLink>
        <StyledLink as={Link} to="/about">
          About
        </StyledLink>
        <StyledLink as={Link} to="/contact">
          Contact
        </StyledLink>
      </OtherPages>
      <div>
        {localStorage.getItem("name") ? (
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
        ) : (
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
