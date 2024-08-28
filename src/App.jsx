import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Featuresection from "./components/Featuresection";
import Subsection from "./components/Subsection";
import Pricing from "./components/Pricing";
import Testamoni from "./components/Testamoni";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div>
      <Navbar />
      <div className="px-6 pt-20 mx-auto max-w-7xl">
        <Herosection />
        <Featuresection />
        <Subsection />
        <Pricing />
        <Testamoni />
        <Footer />
    </div>
     </div>
     </>
  );
}

export default App;
