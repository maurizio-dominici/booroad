export default function ParticipantCard({
  id,
  firstName,
  lastName,
  email,
  phone,
  taxCode,
}) {
  return (
    <div className="container">
      <div className="row">
        <ul>
          <li>{id}</li>
          <li>{firstName}</li>
          <li>{lastName}</li>
          <li>{email}</li>
          <li>{phone}</li>
          <li>{taxCode}</li>
        </ul>
      </div>
    </div>
  );
}
