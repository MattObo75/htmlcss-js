async function initMap() {
    const myPosition = { lat: 60.663, lng: 17.211, altitude: 500 };     

    const { Map3DElement } = await google.maps.importLibrary("maps3d");
    const map = new Map3DElement({
        center: myPosition,
        tilt: 67.5,
        mode: 'HYBRID',
        gestureHandling: "COOPERATIVE"
    });    
     
    document.getElementById("gmp-map-3d").append(map);    
}
initMap();