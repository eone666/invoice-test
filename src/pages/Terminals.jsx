import React, { useState } from "react";
import TerminalForm from "../components/TerminalForm";
import TerminalTable from "../components/TerminalTable";

export default function Terminals() {
  if (!localStorage.getItem("terminals")) {
    localStorage.setItem("terminals", JSON.stringify([]));
  }

  const existingData = JSON.parse(localStorage.getItem("terminals"));

  const [data, setData] = useState(existingData);

  function getRandomString(length) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    const joined = data.concat({
      id: getRandomString(8),
      name: values.name,
      description: values.description,
    });
    setData(joined);
    localStorage.setItem("terminals", JSON.stringify(joined));
    setSubmitting(false);
    resetForm();
  };

  const deleteHandler = (id) => {
    const tmp = data.filter((e, i) => e.id !== id);
    localStorage.setItem("terminals", JSON.stringify(tmp));
    setData(tmp);
  };

  return (
    <div className="page terminals">
      <h1>Terminals</h1>
      <TerminalForm submitHandler={submitHandler}></TerminalForm>
      {data.length > 0 ? (
        <TerminalTable data={data} deleteHandler={deleteHandler} />
      ) : (
        <h2>Nothing found</h2>
      )}
    </div>
  );
}
