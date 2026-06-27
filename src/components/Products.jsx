import Button from "./shared/Button";
import products from "../data/product.json";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Cart from "./Cart";
const Products = ({ cartItems, setCartItems }) => {
  const [selectCart, setSelectCart] = useState(false);
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  console.log(cartItems);
  return (
    <section className="container mx-auto space-y-4 md:space-y-8 lg:space-y-12">
      <div className="text-center space-y-4">
        <h3 className="font-extrabold text-3xl md:text-5xl">
          Premium Digital Tools
        </h3>
        <p className="text-paragraph text-xl max-w-[56ch] mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex items-center justify-between gap-2 w-fit mx-auto">
          <Button
            variant={selectCart ? "null" : "default"}
            onClick={() => setSelectCart(false)}
          >
            Products
          </Button>
          <Button
            variant={selectCart ? "default" : "null"}
            onClick={() => setSelectCart(true)}
          >
            Cart ({cartItems.length})
          </Button>
        </div>
      </div>
      {selectCart ? (
        <Cart cartItems={cartItems} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleOnClick={handleAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
