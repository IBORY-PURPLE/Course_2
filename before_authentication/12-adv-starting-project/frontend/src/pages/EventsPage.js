import { useLoaderData, defer, Await } from "react-router-dom";
import { json } from "react-router";
import { Suspense } from "react";

import EventsList from "../components/EventsList.js";

function EventPage() {
  // 이 컴포넌트를 호출한 라우터의 가장 가까운 loader의 값을 가져온다.
  const { events } = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventPage;

async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "Could not fetch data" };
    // throw new Response(JSON.stringify({ message: "Could not fetch data" }), {
    //   status: 500,
    //   headers: { "Content-Type": "application/json" },
    // });
    throw json({ message: "Could not fetch data" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({ events: eventsLoader() });
}
