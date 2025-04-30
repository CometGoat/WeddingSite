async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    const map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 }, // Replace with desired center coordinates
        zoom: 8, // Replace with desired zoom level
    });
}

initMap();