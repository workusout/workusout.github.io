var userLoc = {},
	distance;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
        	userLoc.lat = position.coords.latitude;
    		userLoc.lon + position.coords.longitude; 
    		distance = document.getElementById("distance").value;
        });
    } else {
    	userLoc.lat = 45.513;
    	userLoc.lon = -122.837;
    }
};

function setZipValue() {
	userLoc.zip = document.getElementById("zipCode").value;
	distance = document.getElementById("distance").value;
};
