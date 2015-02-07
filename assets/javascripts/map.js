function initialize() {
  var myLatlng = new google.maps.LatLng(54.376980, 18.286885);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Apteka św. Marcina'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
