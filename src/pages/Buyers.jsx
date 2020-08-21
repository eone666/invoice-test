import React, { useState } from "react";
import BuyersTable from "../components/BuyersTable";
import { buyers } from "../data/buyers";
import BuyersFilterForm from "../components/BuyersFilterForm";

export default function Buyers() {
  const [data, setData] = useState(buyers);
  const handleFilter = (filterQuery) => {
    const filtered = buyers.filter((e) =>
      e.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setData(filtered);
  };
  return (
    <div className="page buyers">
      <h1>Buyers</h1>
      <BuyersFilterForm handleFilter={handleFilter} />
      <BuyersTable data={data}></BuyersTable>
    </div>
  );
}
