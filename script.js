/*Creamos una variable llamada map y una funcion llamada initMap que no recibe ningun parametro
a nuestra variable map le decimos que sera un nuevo objeto de la funcion google.maps.Map que recibe como parametros
un elemento div del html, el cual se lo pasaremos por el ID, un objetos llamado center, que recibira la latitudes y longitudes
del lugar del cual queremos mostrar el mapa, y el zoom que le meteremos al mapa
*/
var map;
var marcador = {lat:19.4751611, lng:-99.0468698};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.4751611, lng: -99.0468698},//CAMPO OBLIGATORIO
    zoom: 8  // CAMPO OBLIGATORIO
  });

  var marker = new google.maps.Marker({
    position: marcador,
    map: map,
    //icon:'mascara.png'
  });


}
