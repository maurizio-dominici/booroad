// IMPORTS
import { trips } from "../../data/array";
import TripsCard from "../components/tripsCard";

export default function Homepage() {
  return (
    <div className="container">
      <div className="row">
        {trips.map((trip) => {
          <div key={} className="col-4">
            <TripsCard id={}/>
          </div>;
        })}
      </div>
    </div>
  );
}
