import { cn } from "../../utils/cn";

const Button = ({
  children,
  className,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        "w-full rounded-xl bg-blue-600 px-4 py-3 text-white font-semibold transition-all duration-300 hover:bg-blue-700 active:scale-95 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;