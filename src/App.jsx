import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Terminals from "./pages/Terminals";
import Buyer from "./pages/Buyer";
import Buyers from "./pages/Buyers";
import Login from "./pages/Login";
import { AuthContext } from "./context/auth";
import Logout from "./pages/Logout";

function App() {
  const existingUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(existingUser);

  const setUserData = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, setUser: setUserData }}>
      <Router>
        <div className="app">
          <header>
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
          <main>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Terminals} />
            <PrivateRoute path="/buyers" component={Buyers} />
            <PrivateRoute path="/buyers/:id" component={Buyer} />
            <PrivateRoute path="/logout" component={Logout} />
          </main>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
