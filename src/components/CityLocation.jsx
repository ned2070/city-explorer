export default function CityLocation({ display_name, latitude, longitude }) {
  return (
    <div className="cityLocation">
      <p>{display_name}</p>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
}
