/*Creamos una variable llamada map y una funcion llamada initMap que no recibe ningun parametro
a nuestra variable map le decimos que sera un nuevo objeto de la funcion google.maps.Map que recibe como parametros
un elemento div del html, el cual se lo pasaremos por el ID, un objetos llamado center, que recibira la latitudes y longitudes
del lugar del cual queremos mostrar el mapa, y el zoom que le meteremos al mapa
*/
var map;
var coords;

//var marcador = {lat:19.4751611, lng:-99.0468698};

/*Esta funcion es la que inicialza el mapa en el html y es la cual importamos por medio del script de la api
le pasamos los parametros iniciales del mapa por default
*/
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.4751611, lng: -99.0468698},//CAMPO OBLIGATORIO
    zoom: 8  // CAMPO OBLIGATORIO
  });
  //{lat:47.608013, lng:-122.335167}

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
//agregarMarcador({lat: 19.4751611, lng: -99.0468698},);
//agregarMarcador({lat: 19.6021021, lng: -99.0631558},);
agregarMarcador(coords)
}

// ===================================API GEOCODING======================================= //
//Creaos la funcion geoCode para encapsular el servicio de google geo code
function geoCode(lugar){
  //usasmos la funcion axios con su parametro get (en la que hacemos peticion get "obviously") y le
  // pasamos nuestra URL de la que consumiremos el servicio, y concatenamos por medio de objetos
  //los parametros
  axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
  params:{
    address:lugar,
    key:'AIzaSyDmlJky0d55y9q9i7XY9oyIvxJoYfUv5_I'
  }
  })
  .then(function(response) {      // then es lo que hara si resive la respuesta correctamente
    //imprimir respuesta total    // catcha lo que realizara en caso de que halla algun error
    console.log(response);
    //imprimir respuesta address_components
    console.log(response.data.results[0].address_components[0].long_name)
    //agregar valor a las variables
    coords = response.data.results[0].geometry.location
  })
  .catch(function (error){
    console.log(error)
  })
}

geoCode("san cristobal ecatepec")    // ejecutamos la funcion
