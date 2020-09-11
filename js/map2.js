var myCenter2 = new google.maps.LatLng(55.751537, 37.617845);

function initialize() {
    var mapProp2 = {
        center: myCenter2,
        disableDefaultUI: true,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    

    var map2 = new google.maps.Map(document.getElementById("map2"), mapProp2);

    var locations2 = [
        ['Филиал Митинский', 55.847815, 37.359985],
        ['Филиал Черемушки', 55.667464, 37.552789]
      ];
    

    var marker2, i2;
    var markers2 = new Array();

    for (i2 = 0; i2 < locations2.length; i2++) {  
        marker2 = new google.maps.Marker({
          position: new google.maps.LatLng(locations2[i][1], locations2[i][2]),
          map: map2
        });
  
        markers2.push(marker2);
  
        google.maps.event.addListener(marker2, 'click', (function(marker2, i2) {
          return function() {
            infowindow.setContent(locations2[i][0]);
            infowindow.open(map2, marker2);
          }
        })(marker2, i2));
      }
}
google.maps.event.addDomListener(window, 'load', initialize);