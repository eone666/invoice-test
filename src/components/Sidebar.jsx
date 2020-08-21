import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <header className="sidebar">
      <nav className="sidebar__nav nav">
        <ul className="nav__list">
          <li>
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/terminals">
              Terminals
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/buyers">
              Buyers
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
