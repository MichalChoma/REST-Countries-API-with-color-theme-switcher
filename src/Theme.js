import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Context } from "./context/ContextStore";

const lightTheme = {
  backgroundColor: "hsl(0, 2%, 91%)",
  secondaryColor: "hsl(0, 0%, 100%)",
  fontColor: "hsl(200, 15%, 8%)",
  inputColor: "hsl(0, 0%, 52%)",
};

const darkTheme = {
  backgroundColor: "hsl(207, 26%, 17%)",
  secondaryColor: "hsl(209, 23%, 22%)",
  fontColor: "hsl(0, 0%, 100%)",
  inputColor: "hsl(209, 23%, 22%)",
};

const GlobalStyles = createGlobalStyle`

    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
        max-width: 100vw;
        overflow-x: hidden;
        background-color: ${props => props.theme.backgroundColor};
        color: ${(props) => props.theme.fontColor};
        a{
            text-decoration: none;
            color: ${(props) => props.theme.fontColor};
        }
    }
`;

const Theme = ({ children }) => {
  const { isDarkMode } = useContext(Context);
  return (
  <ThemeProvider theme={ isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
  </ThemeProvider>
)};

export default Theme;
