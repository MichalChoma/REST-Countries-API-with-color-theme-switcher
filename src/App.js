import Navbar from "./components/Navbar/Navbar";
import { ContextStore } from "./context/ContextStore";
import Theme from "./Theme";
import { BrowserRouter as Router} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <ContextStore>
      <Theme>
      <AnimatePresence exitBeforeEnter>
        <Router>
          <div style={{overflowX:"hidden"}}>
          <Navbar />
          <AnimatedRoutes />
          </div>
        </Router>
      </AnimatePresence>
      </Theme>
    </ContextStore>
  );
}

export default App;
