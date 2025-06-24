// IMPORTS
import trips from "../../data/array";
import TripsCard from "../components/tripsCard";

export default function Homepage() {
  return (
    <div className="container">
      <div className="row">
        {trips.map((trip) => {
          return (
            <div key={trip.id} className="col-4">
              <TripsCard
                id={trip.id}
                destination={trip.destination}
                startDate={trip.startDate}
                endDate={trip.endDate}
                participants={trip.participants}
                link={`/detail/${trip.id}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
