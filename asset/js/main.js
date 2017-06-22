var map;
var latitud;
var longitud;

$(document).ready(function() {
    localizame(); /*Cuando cargue la página, cargamos nuestra posición*/   
});

function localizame() {
    if (navigator.geolocation) { /* Si el navegador tiene geolocalizacion */
        navigator.geolocation.getCurrentPosition(coordenadas, error);
    }else{
        alert('Oops! Tu navegador no soporta geolocalización');
    }
}

function coordenadas(position) {
    latitud = position.coords.latitude; /*Guardamos nuestra latitud*/
    longitud = position.coords.longitude; /*Guardamos nuestra longitud*/
    cargarMapa();
}

var error = function (error) {
alert ("tenemos un problema con encontrar tu ubicacion");
}
 
function cargarMapa() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom:5,
		center: {lat: -9.1191427, lng: -77.0349046},
	});
    var latlon = new google.maps.LatLng(latitud,longitud); /* Creamos un punto con nuestras coordenadas */
    var myOptions = {
        zoom: 5,
        center: {lat: -9.1191427, lng: -77.0349046}, /* Definimos la posicion del mapa con el punto */
        mapTypeControl: false
    };/*Configuramos una serie de opciones como el zoom del mapa y el tipo.
    map = new google.maps.Map($("#map_canvas").get(0), myOptions); /*Creamos el mapa y lo situamos en su capa */
    
    var coorMarcador = new google.maps.LatLng(latitud,longitud); /*Un nuevo punto con nuestras coordenadas para el marcador (flecha) */
        
    var marcador = new google.maps.Marker({
	/*Creamos un marcador*/

        position: {lat:latitud, lng:longitud}, /*Lo situamos en nuestro punto */  
        animation: google.maps.Animation.DROP,
        zoom:5,
        map: map,/* Lo vinculamos a nuestro mapa */
    });
    map.setZoom(17);
	map.setCenter({lat: latitud, lng: longitud});
}



/*function initMap(){
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom:5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl:false,
		zoomControl:false,
		streetViewControl:false
	});

	var funcionExito = function(posicion) {
			latitud = posicion.coords.latitude;
			longitud = posicion.coords.longitude;

			var miUbicacion = new google.maps.Marker({
				position: {lat:latitud, lng:longitud},
				animation: google.maps.Animation.DROP,
				map: map

			});

			map.setZoom(17);
			map.setCenter({lat: latitud, lng: longitud});
		}

	function buscar(){
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(map);
		}
	}
	

var funcionError = function (error) {
		alert ("tenemos un problema con encontrar tu ubicacion");
	}
} */