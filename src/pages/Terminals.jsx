import React, { useState, useEffect } from "react";
import TerminalForm from "../components/TerminalForm";
import TerminalTable from "../components/TerminalTable";
import nextId from "react-id-generator";

export default function Terminals() {
  if (!localStorage.getItem("terminals")) {
    localStorage.setItem("terminals", JSON.stringify([]));
  }

  const existingData = JSON.parse(localStorage.getItem("terminals"));

  const [data, setData] = useState(existingData);

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    const joined = data.concat({
      id: nextId(),
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
