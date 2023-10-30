export default function CityMap({ API_KEY, lat, lon }) {
  const zoom = 12;
  const width = 800;
  const height = 800;
  // image type //
  const format = "png";
  // only roadmap is currently available
  const mapType = "roadmap";

  const API_map = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=<${lat},${lon}&zoom=<${zoom}&size=${width}x${height}&format=${format}&maptype=${mapType}`;

  return (
    <div className="cityMap">
      <img src={API_map} alt="Map"></img>
    </div>
  );
}
