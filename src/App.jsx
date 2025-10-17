import { useState, useEffect } from "react";
import UniqueNavbar from "./Component/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Footer from "./Component/Footer";
import Projects from "./Pages/Projects";
import { Routes, Route } from "react-router-dom";
import Loader from "./Pages/Loader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <UniqueNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
