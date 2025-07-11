import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from "../components/EventItem";
function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data.event}></EventItem>;
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "could not fetch details for selected evnet." },
      {
        status: 500,
      }
    );
  } else {
    // response객체가 event객체를 묶었다고 생각하자.
    const data = await response.json();
    return data;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Coulde not find event" }, { status: 500 });
  }

  return redirect("/events");
}
