import {Home, Navbar, Footer, Propuesta, Area} from "./components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-black relative w-screen h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propuesta" element={<Propuesta/>} />
          <Route path="/area" element={<Area/>} />
          <Route path="/contacto" element={<Propuesta/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
