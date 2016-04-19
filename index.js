$(document).ready(function() {
  var map = L.map('map').setView([40.2838, -3.8215], 13);

  var circle = L.circle([40.2838, -3.8215], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  }).addTo(map);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([40.2838, -3.8215]).addTo(map)
      .bindPopup('<a href="http://www.etsit.urjc.es">ETSIT</a> (<a href="http://www.urjc.es">URJC</a>)')
      .openPopup();

  map.locate({setView: true, maxZoom: 18, enableHighAccuracy: true});
  function onLocationFound(e) {
    L.marker(e.latlng).addTo(map).bindPopup("Coordenadas: " + e.latlng.toString()).openPopup();
  }

  map.on('locationfound', onLocationFound);

  var popup = L.popup();
  function onMapClick(e) {
   var coor = e.latlng;
   console.log(coor);
   popup.setLatLng(e.latlng).setContent("Ubicación: " + e.latlng.toString()).openOn(map);
   var circle = L.circle(coor, 500, {
       color: 'red',
       fillColor: '#f03',
       fillOpacity: 0.5
   }).addTo(map);
  }

  map.on('click', onMapClick);

});
