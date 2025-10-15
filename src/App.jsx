import { Routes, Route } from "react-router-dom";
import UniqueNavbar from "./Component/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Footer from "./Component/Footer";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <UniqueNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
