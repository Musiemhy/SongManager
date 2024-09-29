import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  OtherPages,
  StyledLink,
  LoginButton,
} from "../styles";

const Header = () => {
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
        <Link to="/login">
          <LoginButton>Login</LoginButton>
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
