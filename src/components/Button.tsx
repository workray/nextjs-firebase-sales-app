import classNames from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className,
  children,
  loading = false,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames("btn relative mb-4", className)}
      {...rest}
      disabled={disabled || loading}
    >
      {children}
      {loading && <span className="loading loading-ring loading-md"></span>}
    </button>
  );
};

export default Button;
