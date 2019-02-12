angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://bootcampss.herokuapp.com/api/listings');
    },

	create: function(listing) {
	  return $http.post('http://bootcampss.herokuapp.com/api/listings', listing);
    },

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
      return $http.delete('http://bootcampss.herokuapp.com/api/listings' + id);
    }
  };

  return methods;
});
