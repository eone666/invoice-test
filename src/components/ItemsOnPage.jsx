import React, { useState } from "react";

export default function ItemsOnPage({ setItemsOnPage }) {
  const [select, setSelect] = useState("Items on a page");

  const changeHandler = (e) => {
    setSelect(e.target.value);
    setItemsOnPage(e.target.value);
  };
  return (
    <div>
      <select
        className="select items-on-page"
        value={select}
        onChange={changeHandler}
      >
        <option disabled>Items on a page</option>
        <option default value="15">
          15
        </option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
