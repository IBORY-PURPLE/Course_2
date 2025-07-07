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

import RootLayOut from "./pages/Root.js";
import HomePage from "./pages/HomePage.js";
import EventPage from "./pages/EventsPage.js";
import EventDetail from "./pages/EventDetailPage.js";
import NewEventPage from "./pages/NewEventPage.js";
import EditEventPage from "./pages/EditEventPage.js";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut></RootLayOut>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/events", element: <EventPage></EventPage> },
      { path: "/events/:eventId", element: <EventDetail></EventDetail> },
      { path: "/events/new", element: <NewEventPage></NewEventPage> },
      {
        path: "/events/:eventId/edit",
        element: <EditEventPage></EditEventPage>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
