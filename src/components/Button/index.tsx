import React from "react";
import classnames from "classnames";
import "./Button.css";

export interface ButtonProps {
  backgroundColor?: string;
  className: string;
  label: string;
  onClick?: () => void;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  className,
  label,
  primary = false,
  size = "medium",
  type = "button",
  ...props
}) => {
  const classes = classnames("btn", `btn--${size}`, {
    "btn--primary": primary,
    "btn--secondary": !primary,
  });

  return (
    <button
      type="button"
      className={classes}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
