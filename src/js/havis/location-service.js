var locationService = (function location() {

    function locate(callback) {

        var locationOptions = {
            enableHighAccuracy: true,
            maximumAge: 1000,
            timeout: 15000
        };

        function locationSuccess(pos) {
            var lat = pos.coords.latitude,
                lng = pos.coords.longitude,
                latScr = lat.toFixed(3),
                lngScr = lng.toFixed(3),
                locationStr = '[' + latScr + ', ' + lngScr + ']',
                locationObject = {
                    lat: lat,
                    lng: lng,
                    locString: locationStr,
                    accuracy: pos.coords.accuracy
                };

            console.log('Accuracy: ' + pos.coords.accuracy);

            if (locationInaccurate(pos.coords.accuracy)) {
                locationObject = {
                    lat: undefined,
                    lng: undefined,
                    locString: '[loc inaccurate]'
                };
            }

            console.log(' location locString: ' + locationObject.locString);

            callback(locationObject);
        }

        function locationError(err) {
            console.log('location error (' + err.code + '): ' + err.message);
            var locationObject = {
                lat: undefined,
                lng: undefined,
                locString: '[location error]'
            };
            callback(locationObject);
        }

        function locationInaccurate(accuracy) {
            // check that location inaccuracy is max 50 meters
            return accuracy > 50;
        }

        // Make an asynchronous request
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
    }

    // public api
    return {
        getLocation: locate
    }

})();

module.exports = locationService;