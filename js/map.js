var myCenter = new google.maps.LatLng(s);
function initialize() {
    var mapProp = {
        center: myCenter,
        disableDefaultUI: true,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp);

    var locations = [
        ['Филиал Горьковский', 56.319453, 44.021203],
        ['Филиал Ленинский', 56.293466, 43.933068]
      ];
    

    var marker, i;
    var markers = new Array();

    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
        });
  
        markers.push(marker);
  
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
}
google.maps.event.addDomListener(window, 'load', initialize);