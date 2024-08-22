import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Crousal from "../components/Crousal";
const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Crousal/>
      </div>
      <div className="m-3">
    <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
