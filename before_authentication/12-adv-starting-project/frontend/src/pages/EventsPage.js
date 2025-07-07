import EventList from "../components/EventsList.js";

const eventlist = [
  {
    id: "e1",
    title: "React Conference 2025",
    image: "https://placehold.co/300x200",
    date: "2025-07-15",
  },
  {
    id: "e2",
    title: "JavaScript Meetup",
    image: "https://placehold.co/300x200",
    date: "2025-08-01",
  },
  {
    id: "e3",
    title: "Web Dev Summit",
    image: "https://placehold.co/300x200",
    date: "2025-09-10",
  },
];

function EventPage() {
  return (
    <>
      <EventList events={eventlist} />
    </>
  );
}

export default EventPage;
