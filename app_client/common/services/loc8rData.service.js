(function () {
    angular
        .module('loc8rApp')
        .service('loc8rData', loc8rData);

    loc8rData.$inject = ['$http','authentication'];

    function loc8rData($http,authentication) {
        var locationByCoords = function (lat, lng) {
            return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=2');
        };

        var locationById = function (locationid) {
            var result = $http.get('/api/locations/' + locationid);
            return result;
        };

        var addReviewById = function (locationid, data) {
            return $http.post('/api/locations/' + locationid + '/reviews', data,{
                headers:{
                    Authorization:'Bearer ' + authentication.getToken()
                }
            });
        };

        return {
            locationByCoords: locationByCoords,
            locationById: locationById,
            addReviewById: addReviewById,
        };
    }
})();
