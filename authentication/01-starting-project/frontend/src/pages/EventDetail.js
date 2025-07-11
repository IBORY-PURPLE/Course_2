import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { getAuthToken } from "../util/auth";

function EventDetailPage() {
  // 2. useRouteLoaderData는 이 페이지 코드에 있는 loader를 사용한 것이고 그 로더에서 반환한
  // 2. defer(event, events)를 할당받는거지?
  // 2. 그럼 밑에 loadedEvent는 event변수 하위에있는거야?
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        {/* event로 온 값이 값이든 promise든 resolve(promise를 푼다)해서 데이터 전송 */}
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;

  // 1. loadEvent는 비동기 함수 호출 await으로 promise 리졸브해서 반환
  // 2. loadEvents는 promise로 묶인 객체를 반환하는 아직 리졸브 안함 위에 await컴포넌트로 리졸브하고 데이터 전송.
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

// eventdetail페이지에서 이벤트 삭제를 위한 action함수.
export async function action({ params, request }) {
  const eventId = params.eventId;
  const token = getAuthToken();
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Couldn't fetch this event item" }),
      {
        status: 500,
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  }
  return redirect("/events");
}
