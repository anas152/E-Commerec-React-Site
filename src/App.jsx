import Banner from "./components/Banner";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";

import AboutUs from "./Pages/About";
import Home from "./Pages/home";
import Contact from "./Pages/contact";
import Login from "./pages/login";
// import SingUp from "./Pages/singup"

function App() {
  return (
    <>
      <Banner />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
