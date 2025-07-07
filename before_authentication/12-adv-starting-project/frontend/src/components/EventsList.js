import classes from "./EventsList.module.css";
import EventItem from "./EventItem.js";

function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <EventItem event={event}></EventItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
