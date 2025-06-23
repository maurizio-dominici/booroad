import trips from "../../data/array";
import { useParams } from "react-router-dom";
import ParticipantList from "../components/ParticipantList";

export default function DetailPage() {
  const { id } = useParams();
  const tripId = parseInt(id);
  const trip = trips.find((t) => t.id === tripId);
  return (
    <>
      <section>
        <div className="container my-4">
          <h2>{trip.id}</h2>
          <p>{trip.destination}</p>
          <p>{trip.startDate}</p>
          <p>{trip.endDate}</p>
        </div>
      </section>

      <section>
        <ParticipantList participants={trip.participants} />
      </section>
    </>
  );
}
