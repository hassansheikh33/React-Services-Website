import Header from "./Header/Header";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { Suspense, useEffect } from "react";

import React from "react";
import { getDuration } from "../../util/token";

export default function Root() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "token expired") {
      return token;
    }

    const duration = getDuration();

    if (duration < 0) {
      submit(null, { action: "/logout", method: "POST" });
    }

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, duration);
  }, [token, submit]);
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
