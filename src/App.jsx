import Banner from "./components/Banner";
import Header from "./components/Header";
// import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./Pages/About";
import Home from "./Pages/home";
import Contact from "./Pages/contact";
import Login from "./Pages/login";
import SingUp from "./Pages/singup";
import Slider from "./components/Slider"
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

function App() {
  const logSing = false;

  return (
    <>
      <Banner />
      <Header />
      <Slider />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        {logSing ? (
          <>
            <Route
              path="/profile"
              element={<div>this is my profile page</div>}
            />

            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
