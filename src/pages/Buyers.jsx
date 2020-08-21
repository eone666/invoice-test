import React, { useState } from "react";
import BuyersTable from "../components/BuyersTable";
import { buyers } from "../data/buyers";
import BuyersFilterForm from "../components/BuyersFilterForm";
import ItemsOnPage from "../components/ItemsOnPage";

export default function Buyers() {
  const [data, setData] = useState(buyers);
  const [isSortAsc, setSortAsc] = useState(true);

  const handleFilter = (filterQuery) => {
    if (filterQuery === "") {
    } else {
      const filtered = buyers.filter((e) =>
        e.name.toLowerCase().includes(filterQuery.toLowerCase())
      );
      setData(filtered);
    }
  };

  const sortBy = (field) => {
    let sorted;
    switch (field) {
      case "averageCheck":
        sorted = data.sort((a, b) =>
          isSortAsc
            ? a.averageCheck - b.averageCheck
            : b.averageCheck - a.averageCheck
        );
        setData(sorted);
        setSortAsc(!isSortAsc);
        break;
      case "numberOfPurchases":
        sorted = data.sort((a, b) =>
          isSortAsc
            ? a.numberOfPurchases - b.numberOfPurchases
            : b.numberOfPurchases - a.numberOfPurchases
        );
        setData(sorted);
        setSortAsc(!isSortAsc);
        break;
      case "totalRevenues":
        sorted = data.sort((a, b) =>
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

  const setItemsOnPage = (count, start = 0) => {
    const _data = buyers.slice(start, count);
    setData(_data);
  };

  return (
    <div className="page buyers">
      <h1>Buyers</h1>
      <BuyersFilterForm handleFilter={handleFilter} />
      <ItemsOnPage setItemsOnPage={setItemsOnPage} />
      <BuyersTable sortBy={sortBy} data={data} />
    </div>
  );
}
