import Button from "./shared/Button";
import products from "../data/product.json";
import ProductCard from "./ProductCard";
const Products = () => {
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
          <Button>Products</Button>
          <Button variant={"null"}>Cart (2)</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
