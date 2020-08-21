import React from "react";
import Button from "./Button";

export default function TerminalTable({ data, deleteHandler }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e) => (
          <tr key={e.id}>
            <th>{e.name}</th>
            <th>{e.description}</th>
            <th>
              <Button
                onClick={() => {
                  deleteHandler(e.id);
                }}
                style={{ width: "auto" }}
              >
                Delete
              </Button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
