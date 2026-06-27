import Button from "./shared/Button";
const Navbar = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          <h3 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold text-4xl">
            DigiTools
          </h3>

          <ul className="flex items-center gap-4 lg:gap-8 *:text-heading">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <img src="./cart.svg" className="size-4" />
            <button>Login</button>
            <div>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <h3 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold text-2xl">
            DigiTools
          </h3>
          <Button>
            <img src="./menu.svg" className="size-6" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
