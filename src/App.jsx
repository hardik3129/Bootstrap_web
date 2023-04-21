import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./layouts";
import Home from "./pages/home"
import About from "./pages/about";
import Service from "./pages/service";
import Pricing from "./pages/pricing";
import Contact from "./pages/contact";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Layouts> <Home/> </Layouts>} />
        <Route path="/about" element={<Layouts> <About/> </Layouts>} />
        <Route path="/service" element={<Layouts> <Service/> </Layouts>} />
        <Route path="/pricing" element={<Layouts> <Pricing/> </Layouts>} />
        <Route path="/contact" element={<Layouts> <Contact/> </Layouts>} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
          <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
