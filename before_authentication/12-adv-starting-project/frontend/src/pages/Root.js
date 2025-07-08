import React from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation.js";

function RootLayout() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayout;
