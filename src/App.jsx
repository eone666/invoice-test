import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Terminals from "./pages/Terminals";
import Buyer from "./pages/Buyer";
import Buyers from "./pages/Buyers";
import Login from "./pages/Login";
import { AuthContext } from "./context/auth";
import Logout from "./pages/Logout";
import "./App.css";
import Sidebar from "./components/Sidebar";

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
          <Sidebar></Sidebar>
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
