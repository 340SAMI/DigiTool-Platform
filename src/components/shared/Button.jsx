const Button = ({
  variant = "default",
  className = "",
  children,
  onClick,
  ...props
}) => {
  const baseClass =
    "w-full py-3 px-4 rounded-full font-bold text-center text-sm transition-all duration-200 cursor-pointer";

  const variants = {
    default: "text-white bg-linear-to-r from-primary to-secondary",
    white: "bg-white hover:bg-purple-50 text-purple-600 shadow-sm",
    ghost:
      "border-2 border-purple-600 text-purple-600 bg-transparent hover:bg-purple-5",
    null: "bg-transparent",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
