import Navbar from "./components/Navbar/Navbar";
import { ContextStore } from "./context/ContextStore";
import Theme from "./Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <ContextStore>
      <Theme>
        <Router>
          <div style={{overflowX:"hidden"}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:countryName" element={<CountryDetail />} />
          </Routes>
          </div>
        </Router>
      </Theme>
    </ContextStore>
  );
}

export default App;
