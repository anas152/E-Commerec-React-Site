import Banner from "./components/Banner";
import Header from "./components/Header";
import AboutUs from "./Pages/About";
import Home from "./Pages/home";
import Contact from "./Pages/contact";
import Login from "./Pages/login";
import SingUp from "./Pages/singup";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

function App() {
  const logSing = false;

  return (
    <>
      <Banner />
      <Header />
  

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
            <Route path="/singup" element={<SingUp />} />
            <Route path="*" element={<Navigate to="/singup" />} />
            {/* <Route path="/login" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/not-found" />} /> */}
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/singup" element={<SingUp />} />
            <Route path="*" element={<Navigate to="/singup" />} />
          </>
        )}
        
      </Routes>

    </>
  );
}

export default App;
