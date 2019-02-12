angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://https://bootcampss.herokuapp.com/');
    },

	create: function(listing) {
	  return $http.post('https://https://bootcampss.herokuapp.com/', listing);
    },

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
      return $http.delete('https://https://bootcampss.herokuapp.com/' + id);
    }
  };

  return methods;
});
