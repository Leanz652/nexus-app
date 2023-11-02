import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Propuesta from "./components/Propuesta";
import Area from "./components/Area";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-pink-300 relative w-screen h-screen">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propuesta" element={<Propuesta />} />
          <Route path="/area" element={<Area />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
