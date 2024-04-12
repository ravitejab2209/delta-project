mapboxgl.accessToken = mapToken;
console.log(mapToken);

// Check if the listing is valid and contains geometry.coordinates
if (listing && listing.geometry && listing.geometry.coordinates) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    const marker = new mapboxgl.Marker({ color: 'red' })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h4>${listing.location}</h4><p>Exact location provided after booking!</p>`))
        .addTo(map);
} else {
    console.error("Error: Invalid listing or listing coordinates.");
}

