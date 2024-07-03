import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import React from "react";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
