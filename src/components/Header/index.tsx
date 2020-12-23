import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

type Pages = {
  label: string;
  path: string;
};

export type HeaderProps = {
  actions: ReactNode;
  logo: ReactNode;
  pages: Pages[];
};

export function Header({ actions, logo, pages }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__main">
        <div className="header__logo">{logo}</div>
        <nav className="header__nav">
          {pages.map(({ label, path }: Pages) => (
            <Link to={path} className="header__nav-item" key={label}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header__actions">{actions}</div>
      </div>
    </header>
  );
}
