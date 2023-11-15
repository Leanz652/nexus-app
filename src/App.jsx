import { Home, Propuesta, Area, Contacto, Navbar } from './components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bg-black relative  w-screen h-screen">


      <Router>
      <Navbar/>
        <Routes>
          <Route path="/nexus-app/" element={<Home />} />
          <Route path="/nexus-app/propuesta" element={<Propuesta />} />
          <Route path="/nexus-app/area" element={<Area />} />
          <Route path="/nexus-app/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
