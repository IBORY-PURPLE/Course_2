import classes from "./EventItem.module.css";
import { Link, useSubmit, useLocation } from "react-router-dom";

function EventItem({ event }) {
  const submit = useSubmit();
  const location = useLocation();

  function startDeleteHandler() {
    console.log(event.id);
    const value = window.confirm("Are you sure?");
    if (value) {
      submit(null, { method: "DELETE" });
    }
  }

  const isDetailPage = location.pathname === `/events/${event.id}`;

  return (
    <article className={classes.event}>
      <Link to={`/events/${event.id}`}>
        <img src={event.image} alt={event.title} />
        <h1>{event.title}</h1>
      </Link>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {isDetailPage && (
        <menu className={classes.actions}>
          <Link to={`/events/${event.id}/edit`}>Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default EventItem;
