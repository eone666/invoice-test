import React, { useState } from "react";
import BuyersTable from "../components/BuyersTable";
import { buyers } from "../data/buyers";
import BuyersFilterForm from "../components/BuyersFilterForm";

export default function Buyers() {
  const [data, setData] = useState(buyers);
  const [isSortAsc, setSortAsc] = useState(true);
  const handleFilter = (filterQuery) => {
    const filtered = buyers.filter((e) =>
      e.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setData(filtered);
  };
  const sortBy = (field) => {
    let sorted;
    switch (field) {
      case "averageCheck":
        sorted = buyers.sort((a, b) =>
          isSortAsc
            ? a.averageCheck - b.averageCheck
            : b.averageCheck - a.averageCheck
        );
        setData(sorted);
        setSortAsc(!isSortAsc);
        break;
      case "numberOfPurchases":
        sorted = buyers.sort((a, b) =>
          isSortAsc
            ? a.numberOfPurchases - b.numberOfPurchases
            : b.numberOfPurchases - a.numberOfPurchases
        );
        setData(sorted);
        setSortAsc(!isSortAsc);
        break;
      case "totalRevenues":
        sorted = buyers.sort((a, b) =>
          isSortAsc
            ? a.totalRevenues - b.totalRevenues
            : b.totalRevenues - a.totalRevenues
        );
        setData(sorted);
        setSortAsc(!isSortAsc);
        break;

      default:
        break;
    }
  };
  return (
    <div className="page buyers">
      <h1>Buyers</h1>
      <BuyersFilterForm handleFilter={handleFilter} />
      <BuyersTable sortBy={sortBy} data={data}></BuyersTable>
    </div>
  );
}
