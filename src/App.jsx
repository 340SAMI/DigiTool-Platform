import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Stats from "./components/Stats";
import Steps from "./components/Steps";

const App = () => {
  return (
    <div className="font-manrope space-y-4 p-4 md:py-8 sm:space-y-8 md:space-y-12 lg:space-y-20">
      <header className="container mx-auto">
        <Navbar />
      </header>
      <main className="space-y-4 sm:space-y-8 md:space-y-12 lg:space-y-20">
        <Hero />
        <Stats />
        <Products />
        <Steps />
        <Pricing />
      </main>
    </div>
  );
};

export default App;
