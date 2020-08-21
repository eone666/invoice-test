import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const existingUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(existingUser);
  return (
    <header className="sidebar">
      <div className="user">{user ? user.login : null}</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Terminals</Link>
          </li>
          <li>
            <Link to="/buyers">Buyers</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
