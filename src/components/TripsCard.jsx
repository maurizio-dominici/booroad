export default function TripsCard({
  id,
  destination,
  startDate,
  endDate,
  participants,
}) {
  return (
    // <Link to={`/movie/${id}`} className="text-decoration-none text-dark">
    <div className="card h-100 mb-0" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">{destination}</h5>
            <p className="card-text">{startDate}</p>
            <p className="card-text fw-bold ">{endDate}</p>
            <p className="card-text">
              <small className="text-body-secondary">{participants}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
}
