import React from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Ikon from "./components/Ikon";
import { useWindowWidth } from '@react-hook/window-size'




function App() {

  const windowWidth = useWindowWidth()

  return (
    <div>
        <Header />
        { windowWidth <= 768 && <Campaigns /> }
        <HeroSection />
        <Ikon />
        <Categories />
        { windowWidth > 768 && <Campaigns /> }
     <div className="container mx-auto grid gap-y-6 pt-8">

        <MobileApp />
        <Cards />
     </div>
        <Footer />
    </div>
  );
}

export default App;
