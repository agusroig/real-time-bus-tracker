L.mapbox.accessToken=
'pk.eyJ1IjoiYWd1c3JvaWciLCJhIjoiY2w2cjYwcTMzMGRjYjNkbGowZjZ2a2F6eSJ9.1n1pTHPel67cvxpxKJWcNw';

const map = L.mapbox
  .map("map")
  .setView([-34.604857, -58.423037], 12)
  .addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11"));
  
  var marker = L.marker([-34.591053, -58.375468], {
    icon: L.mapbox.marker.icon({
      "marker-symbol": "bus",
      "marker-color": "#f86767",
    }),
});
marker.addTo(map);
marker.bindTooltip('Retiro').addTo(map);

// marker.bindPopup(L.marker.title);
  const busStops =[
  [-34.591053, -58.375468],
  [-34.580807, -58.415089],
  [-34.5949421,-58.4588826],
  [-34.596907, -58.463351],
  [-34.600990, -58.491897],
  [-34.602838, -58.526794],
  [-34.603474, -58.540248],
  [-34.604878, -58.564214],
  [-34.605018, -58.594149],
  [-34.593475, -58.626405],
  ];
const titles = [
 "Retiro", "Palermo", "Villa Crespo", "La Paternal", "Villa del Parque", "Devoto", "Santos Lugares", "Caseros", "El Palomar", "Hurlingham"
]
  var counter = 0;
  function move(){
    setTimeout(()=> {
      if(counter > busStops.length) return;
      marker.setLatLng(L.latLng(busStops[counter]));
      marker.bindTooltip(titles[counter]).addTo(map);
      counter++;
      move();
    }, 1000)
  }
