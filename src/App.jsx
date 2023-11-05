import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/Landing/LandingPage";
import StocksAndCryptoTable from "./components/Table/StockCryptoTable";

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
