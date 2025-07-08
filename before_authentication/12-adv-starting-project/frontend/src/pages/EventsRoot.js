import EventsNavigation from "../components/EventsNavigation.js";
import { Outlet } from "react-router-dom";

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default EventsRootLayout;
