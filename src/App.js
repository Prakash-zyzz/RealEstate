import React from "react"
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Types from "./Components/Types";
import Search from "./Components/Search";
import Cards from "./Components/Cards";

import Footer from "./Components/Footer";

function App() {
  return (
    <div >
     <Navbar />
     <Hero />
     <Types />
     <Search />
     <Cards />
     <Footer />
    </div>
  );
}

export default App;
