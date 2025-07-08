import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList.js";

function EventPage() {
  // 이 컴포넌트를 호출한 라우터의 가장 가까운 loader의 값을 가져온다.
  const events = useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventPage;
