import { useState } from "react";

import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

const MainContent = () => {
  const [activePage, setActivePage] = useState("about");
  const navItems = ["About", "Resume", "Portfolio", "Contact"];

  const handleNavClick = (page) => {
    setActivePage(page);
    // console.log(page);
  };

  return (
    <div className="main-content">
      <Navbar
        activePage={activePage}
        onNavClick={handleNavClick}
        navItems={navItems}
      />
      {activePage === "about" && <About />}
      {activePage === "Resume" && <Resume activePage={activePage} />}
      {activePage === "Portfolio" && <Portfolio activePage={activePage} />}
      {activePage === "Contact" && <Contact activePage={activePage} />}
    </div>
  );
};

export default MainContent;
