import React from "react";
import PrivateRoute from "../PrivateRoute";
import Terminals from "./Terminals";
import Buyer from "./Buyer";
import Buyers from "./Buyers";
import Logout from "./Logout";
import Home from "./Home";
import Sidebar from "../components/Sidebar";

export default function Main() {
  return (
    <div className="root-page">
      <Sidebar></Sidebar>
      <main>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/terminals" component={Terminals} />
        <PrivateRoute path="/buyers" component={Buyers} />
        <PrivateRoute path="/buyers/:id" component={Buyer} />
        <PrivateRoute path="/logout" component={Logout} />
      </main>
    </div>
  );
}
