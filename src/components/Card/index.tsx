import React, { FC, ReactNode } from "react";
import classnames from "classnames";
import "./Card.css";

export interface CardProps {
  bordered?: boolean;
  children: ReactNode;
  className?: string;
  raised: boolean;
}

export const Card: FC<CardProps> = ({
  bordered = false,
  children,
  className,
  raised = true,
  ...props
}) => {
  const cardClasses = classnames("card", className, {
    "card--bordered": bordered,
    "card--raised": raised,
  });

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};
