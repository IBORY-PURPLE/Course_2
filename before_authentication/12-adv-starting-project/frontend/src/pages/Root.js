import React from "react";
import { Outlet } from "react-router-dom";

import { MainNavigator } from "./components/MainNavigation.js";

function RootLayOut() {
  return (
    <>
      <MainNavigator></MainNavigator>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayOut;
