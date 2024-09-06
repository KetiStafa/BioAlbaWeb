const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;


//41.384755, 19.760255
function initMap2() {
    const myLatLng = { lat: 41.384755, lng: 19.760255 };
    const map = new google.maps.Map(document.getElementById("map2"), {
      zoom: 11,
      center: myLatLng,
    });
  
     marker = new google.maps.Marker({
      position: {lat: 41.384755, lng: 19.760255},
      map: map,
      title: "Hello World!",
    });
  }