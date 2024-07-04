import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Some Error Occured</h2>
      <p>{error.message}</p>
    </div>
  );
}
