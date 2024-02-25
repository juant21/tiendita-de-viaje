function iniciarMap(){/*8.955668, -75.450306*/
    var coord = {lat:8.955668,lng: -75.450306};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}