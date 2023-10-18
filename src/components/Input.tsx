import React from "react";
import classNames from "classnames";

export type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  className?: string;
  label?: string;
  error?: string;
  required?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => {
  const { className, label, error, id, required, ...rest } = props;

  return (
    <div className={classNames("flex flex-col w-full mb-4", className)}>
      {label && (
        <label
          htmlFor={id}
          className={classNames("label", { "text-red-500": error })}
        >
          <span className="label-text">
            {label}
            {required && "*"}
          </span>
        </label>
      )}
      <input
        id={id}
        ref={ref}
        className={classNames("input input-bordered w-full", {
          "border-red-500 focus:border_red_600": error,
        })}
        {...rest}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
