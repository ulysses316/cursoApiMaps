/*Creamos una variable llamada map y una funcion llamada initMap que no recibe ningun parametro
a nuestra variable map le decimos que sera un nuevo objeto de la funcion google.maps.Map que recibe como parametros
un elemento div del html, el cual se lo pasaremos por el ID, un objetos llamado center, que recibira la latitudes y longitudes
del lugar del cual queremos mostrar el mapa, y el zoom que le meteremos al mapa
*/
var map;
//var marcador = {lat:19.4751611, lng:-99.0468698};

/*Esta funcion es la que inicialza el mapa en el html y es la cual importamos por medio del script de la api
le pasamos los parametros iniciales del mapa por default
*/
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.4751611, lng: -99.0468698},//CAMPO OBLIGATORIO
    zoom: 8  // CAMPO OBLIGATORIO
  });

/*La funcion agregarMarcador fue creada por nosotros para poder realizar todo el proceso de agregar marcadores
de una manera mas simple y no tener que andar copiando y pegando todo el codigo de adentro una y otra vez para agregar marcadores*/
function agregarMarcador(cordenadas, flag){
  var marker = new google.maps.Marker({
    position: cordenadas,
    map: map,
    icon:flag
  });
}

//Asi es como invocamos nuestra funcion de marcadores
agregarMarcador({lat: 19.4751611, lng: -99.0468698},);
agregarMarcador({lat: 19.6021021, lng: -99.0631558},);


}
