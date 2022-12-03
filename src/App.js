import React from "react";
import Footer from "./components/pages/Footer";
import Gerard from "./components/pages/Gerard";
import Mine from "./components/pages/Mine";
import Navbar from "./components/pages/Navbar";
import Order from "./components/pages/Order";
import Bachelor from "./components/pages/Bachelor";
import Stock from "./components/pages/Stock";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mine />
      <Order />
      <Gerard />
      <Bachelor />
      <Stock />
      <Footer/>
    </div>
  );
}

export default App;
