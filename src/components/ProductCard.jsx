import Button from "./shared/Button";
const tagStyles = {
  bestSeller: {
    wrapper: "bg-amber-100 text-amber-600 border border-amber-200",
  },
  popular: {
    wrapper: "bg-violet-100 text-violet-600 border border-violet-200",
  },
  new: {
    wrapper: "bg-emerald-100 text-emerald-600 border border-emerald-200",
  },
};

const periodLabel = {
  monthly: "/Mo",
  "one-time": "/One-Time",
  yearly: "/Yr",
};

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function ProductCard({ product }) {
  const tag = tagStyles[product.tagType] || tagStyles.new;

  return (
    <div
      className={`
        relative bg-white rounded-2xl p-6 flex flex-col gap-4
        border border-gray-200 transition-all duration-300 cursor-pointer
      `}
    >
      {/* Tag badge */}
      <span
        className={`
          absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full
          ${tag.wrapper}
        `}
      >
        {product.tag}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl">
        {product.icon}
      </div>

      {/* Name & Description */}
      <div className="flex flex-col gap-1 pr-16">
        <h2 className="text-lg font-bold text-heading leading-snug">
          {product.name}
        </h2>
        <p className="text-sm text-paragraph leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-0.5">
        <span className="text-3xl font-extrabold text-heading">
          ${product.price}
        </span>
        <span className="text-sm text-paragraph font-medium ml-0.5">
          {periodLabel[product.period]}
        </span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-paragraph">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button>Buy Now</Button>
    </div>
  );
}
export default ProductCard;
