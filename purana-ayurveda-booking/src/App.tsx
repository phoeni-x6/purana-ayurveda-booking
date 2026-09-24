import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import Packages from "./pages/Packages";
import Consultation from "./pages/Consultation";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages with Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Standalone pages — NO Navbar / Footer */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;