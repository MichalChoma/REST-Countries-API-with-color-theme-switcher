import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button/Button";
import { ThemeContext } from "../../context/ThemeStore";
import { useContext } from "react";

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);

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
  const { isDarkMode, darkModeToggler } = useContext(ThemeContext);

  const moonIcon = isDarkMode ? faMoon : farMoon;

  return (
    <StyledNav>
      <h1>Where in the world</h1>
      <Button onClick={darkModeToggler}>
        <FontAwesomeIcon icon={moonIcon} />
        Dark Mode
      </Button>
    </StyledNav>
  );
};

export default Navbar;
