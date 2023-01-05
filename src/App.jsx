import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./layouts";
import Home from "./pages/home"
import About from "./pages/about";
import Service from "./pages/service";
import Pricing from "./pages/pricing";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layouts> <Home/> </Layouts>} />
        <Route path="/about" element={<Layouts> <About/> </Layouts>} />
        <Route path="/service" element={<Layouts> <Service/> </Layouts>} />
        <Route path="/pricing" element={<Layouts> <Pricing/> </Layouts>} />
        <Route path="/contact" element={<Layouts> <Contact/> </Layouts>} />
      </Routes>
    </div>
  );
}

export default App;
