var map ;
function success(pos) {
  console.log(pos);

  if(map === undefined){
    map = L.map("mapid").setView([pos.coords.latitude, pos.coords.longitude], 25);
  }else{
    map.remove();
    map = L.map("mapid").setView([pos.coords.latitude, pos.coords.longitude], 25);
  }

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([pos.coords.latitude, pos.coords.longitude])
    .addTo(map)
    .bindPopup("você")
    .openPopup();
}

function error(error) {
  console.log(error);
}
var watchID = navigator.geolocation.watchPosition(success, error, {
  enableHighAccuracy: true,
  timeout: 5000,
});

//  navigator.geolocation.clearWatch(watchID)
//   confirm("Ativar localização?");

//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 10,
//     center: { lat: -33.9, lng: 151.2 },
//   });

//   setMarkers(map);

//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       initMap(position.coords.latitude, position.coords.longitude);
//     },
//     function errorCallback(error) {
//       console.log(error);
//     }
//   );
// }
