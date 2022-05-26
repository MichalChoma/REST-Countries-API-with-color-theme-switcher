import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { ThemeStore } from "./context/ThemeStore";
import Theme from "./Theme";

const StyledApp = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  return (
    <ThemeStore>
      <Theme>
          <Navbar />
        
      </Theme>
    </ThemeStore>
  );
}

export default App;
