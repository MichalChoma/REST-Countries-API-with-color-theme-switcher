import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button/Button";
import { Context } from "../../context/ContextStore";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontColor};
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

  a{
    text-decoration: none;
  }
  h1 {
    font-size: 1.3rem;
    cursor: pointer;
  }
  button {
    font-weight: 600;

    svg {
      margin-right: 3px;
    }
  }
`;

const Navbar = () => {
  const { isDarkMode, darkModeToggler } = useContext(Context);

  const moonIcon = isDarkMode ? faMoon : farMoon;

  const scrollToTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
  }

  return (
    <StyledNav>
      <NavLink to="/">
        <h1 onClick={scrollToTop}>Where in the world</h1>
      </NavLink>
      <Button onClick={darkModeToggler}>
        <FontAwesomeIcon icon={moonIcon} />
        Dark Mode
      </Button>
    </StyledNav>
  );
};

export default Navbar;
