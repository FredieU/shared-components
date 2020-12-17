import React, { ComponentPropsWithRef, ReactElement } from "react";
import classnames from "classnames";
import "./Input.css";

export type InputProps = ComponentPropsWithRef<"input"> & {
  className?: string;
  hasErrors: boolean;
  label: string;
  name: string;
};

export function Input({
  className,
  hasErrors,
  label,
  name,
  ...props
}: InputProps): ReactElement {
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
}
