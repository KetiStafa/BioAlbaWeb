
function initMap() {
    const myLatLng = { lat: 41.27421429347341, lng: 19.969875355652274150 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: myLatLng,
    });

     marker = new google.maps.Marker({
      position: {lat: 41.2173910964184, lng: 19.969875355652274150},
      map: map,
      title: "Hello World!",
    });
}
//41.27421429347341, 19.88066919775938





