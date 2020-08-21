import React from "react";
import { Link } from "react-router-dom";

export default function BuyersTable({ data }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Average check</th>
            <th>Number of purchases</th>
            <th>Total revenues</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>
                <Link to={`/buyers/${e.id}`}>{e.id}</Link>
              </td>
              <td>{e.name}</td>
              <td>{e.averageCheck}</td>
              <td>{e.numberOfPurchases}</td>
              <td>{e.totalRevenues}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
