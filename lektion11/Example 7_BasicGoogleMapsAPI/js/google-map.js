function init() {
    let mapOptions = {
        center = new google.maps.LatLng(40.782710, -73.965310),
        myTypeId: google.maps.MyTypeId.ROADMAP,
        zoom: 10
    }
    let venueMap;
    venueMap = new google.maps.Map(document.getElementById("map"),mapOptions);

    function loadScript() {
        let script = document.createElement("script");
        script.src  = http://maps.googleapis.com/maps/api/js?sensor=false&callback=init;
        document.body.appendChild(script);
        
    }
}