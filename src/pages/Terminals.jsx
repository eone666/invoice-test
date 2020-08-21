import React, { useState, useEffect } from "react";
import TerminalForm from "../components/TerminalForm";
import TerminalTable from "../components/TerminalTable";

export default function Terminals() {
  if (!localStorage.getItem("terminals")) {
    localStorage.setItem("terminals", JSON.stringify([]));
  }

  const existingData = JSON.parse(localStorage.getItem("terminals"));

  const [data, setData] = useState(existingData);

  const [id] = useState(data.length);

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    const joined = data.concat({
      id,
      name: values.name,
      description: values.description,
    });
    setData(joined);
    localStorage.setItem("terminals", JSON.stringify(joined));
    setSubmitting(false);
    resetForm();
  };

  const deleteHandler = (e) => {
    console.dir(e.target);
  };

  return (
    <div className="page terminals">
      <h1>Terminals</h1>
      <TerminalForm submitHandler={submitHandler}></TerminalForm>
      {data ? (
        <TerminalTable data={data} deleteHandler={deleteHandler} />
      ) : (
        <h2>Nothing found</h2>
      )}
    </div>
  );
}
