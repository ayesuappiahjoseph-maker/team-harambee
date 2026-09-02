// Builds a Google Maps Directions URL. Works with no API key by using the
// public maps.google.com directions endpoint. Origin is the student's current
// coordinates (obtained locally via geolocation and never sent to a server);
// destination is the selected campus location.
export function buildDirectionsUrl({ origin, destinationName, destinationCoords }) {
  const destination = destinationCoords
    ? `${destinationCoords.lat},${destinationCoords.lng}`
    : encodeURIComponent(`${destinationName}, University of Mines and Technology, Tarkwa, Ghana`);

  const params = new URLSearchParams({
    api: "1",
    destination,
    travelmode: "walking",
  });

  if (origin) {
    params.set("origin", `${origin.lat},${origin.lng}`);
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

// Fallback: open a plain search/place link when we only have a name/address.
export function buildSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
