import React, { FC, InputHTMLAttributes } from "react";
import classnames from "classnames";
import "./Input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  hasErrors: boolean;
  label: string;
  name: string;
}

export const Input: FC<InputProps> = ({
  className,
  hasErrors,
  label,
  name,
  ...props
}) => {
  const inputClasses = classnames("input", {
    "input--errored": hasErrors,
  });

  return (
    <>
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input id={name} className={inputClasses} {...props} />
    </>
  );
};
