import React from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation.js";

function RootLayOut() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayOut;
