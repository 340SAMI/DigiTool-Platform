import Button from "./shared/Button";
const Navbar = ({ cartItems }) => {
  return (
    <>
      <div className="hidden lg:block">
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
            {cartItems.length > 0 && <span>({cartItems.length})</span>}
            <button>Login</button>
            <div>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex items-center justify-between">
          <h3 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold text-2xl">
            DigiTools
          </h3>
          <div>
            <Button className="block">
              <img src="./menu.svg" className="size-6" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
