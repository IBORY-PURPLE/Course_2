// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components

// 4. Add properly working links to the MainNavigation

// 5. Ensure that the links in MainNavigation receive an "active" class when active

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage

// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.js";
import EventsRootLayout from "./pages/EventsRoot.js";

import ErrorPage from "./pages/Error.js";
import HomePage from "./pages/HomePage.js";
import EventPage from "./pages/EventsPage.js";
import EventDetail, {
  loader as eventDetailLoader,
} from "./pages/EventDetailPage.js";
import NewEventPage from "./pages/NewEventPage.js";
import EditEventPage from "./pages/EditEventPage.js";

import { loader as EventsLoader } from "./pages/EventsPage.js";
const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "events",
        element: <EventsRootLayout></EventsRootLayout>,
        children: [
          {
            index: true,
            element: <EventPage></EventPage>,
            loader: EventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail></EventDetail>,
              },
              {
                path: "edit",
                element: <EditEventPage></EditEventPage>,
              },
            ],
          },
          { path: "new", element: <NewEventPage></NewEventPage> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
