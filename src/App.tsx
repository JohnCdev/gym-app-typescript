import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Classes from "@/scenes/classes";
import Contact from "@/scenes/contact-us";
import Footer from "@/scenes/footer";
import Benefits from "./scenes/benefits";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <Classes setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </>
  );
}

export default App;
