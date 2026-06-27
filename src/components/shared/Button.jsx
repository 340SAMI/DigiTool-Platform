const Button = ({ className = "", variant = "", ...props }) => {
  const defaultClass =
    "text-white bg-linear-to-r from-primary to-secondary rounded-full px-4 py-3 cursor-pointer";
  const ghostClass =
    "bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent border border-primary rounded-full px-4 py-3 cursor-pointer";
  const nullClass = "px-4 py-3 cursor-pointer";
  return (
    <button
      className={`${variant == "ghost" ? ghostClass : variant == "null" ? nullClass : defaultClass} ${className}`}
      {...props}
    />
  );
};

export default Button;
