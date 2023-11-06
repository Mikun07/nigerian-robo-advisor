import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import LandingPage from "./pages/Landing/LandingPage";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
