async function initMap() {
    const { AltitudeMode, Map3DElement, MapMode, PopoverElement, Marker3DElement  } = await google.maps.importLibrary("maps3d");    

    const map = new Map3DElement({
        center: { lat: 60.663, lng: 17.211, altitude: 0.107 }, range: 4000, tilt: 74, heading: 38,
        mode: MapMode.HYBRID,
        gestureHandling: "COOPERATIVE"
    });
    const popover = new PopoverElement({
        altitudeMode: AltitudeMode.ABSOLUTE,
        open: true,
        positionAnchor: { lat: 60.663, lng: 17.211, altitude: 150 },
    });
    popover.append('Mattias Eklunds place');
    map.append(popover);

    const marker = new Marker3DElement({
        position: {lat: 60.663, lng: 17.211}, // (Required) Marker must have a lat/lng.
        //altitudeMode : "ABSOLUTE", // (Optional) Treated as CLAMP_TO_GROUND if omitted.
        extruded : true, // (Optional) Draws line from ground to the bottom of the marker.
        label : "Mattias Eklunds place" // (Optional) Add a label to the marker.
    });
    map.append(marker); // The marker must be appended to the map.
     
    document.getElementById("gmp-map-3d").append(map);    
}
initMap();