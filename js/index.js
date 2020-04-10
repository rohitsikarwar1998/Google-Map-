function initMap() {
    var agra = {
        lat: 27.1767,
        lng: 78.0081
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: agra,
        zoom: 11,
    });

}