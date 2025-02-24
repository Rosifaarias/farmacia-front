import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Importação correta
import Footer from "./componentes/footer/Footer";
import Navbar from "./componentes/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

