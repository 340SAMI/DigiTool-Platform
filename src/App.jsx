import { useState } from "react";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <div className="font-manrope space-y-4 p-4 md:py-8 sm:space-y-8 md:space-y-12 lg:space-y-20">
        <header className="container mx-auto">
          <Navbar cartItems={cartItems} />
        </header>
        <main className="space-y-4 sm:space-y-8 md:space-y-12 lg:space-y-20">
          <Hero />
          <Stats />
          <Products cartItems={cartItems} setCartItems={setCartItems} />
          <Steps />
          <Pricing />
        </main>
      </div>
      <CTA />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
