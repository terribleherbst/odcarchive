angular.module('galleryApp', []).controller('GalleryController', function($scope, $http, $window){
     var IMAGE_WIDTH = 405;
  
	$scope.searchDocs = function() {
        $http.defaults.headers.common['Authorization'] = 'Basic b2RjOm9kYw==';
  
        $http({
          url: 'http://odcdemo.10m.local/odc/v1/ODC_WS_TEST_TXT/hits/ODC_WS_TEST',
          dataType: 'json',
          method: 'GET',
          withCredentials: true,
          headers: {
              "Content-Type": "application/json"
          }
		}).success(function(data, status, headers, config) {
               $scope.server = 'odcdemo.10m.local';
               $scope.repository = 'ODC_WS_TEST_TXT';               
		    	$scope.docs = data.hitlist;                  //set view model
		}).error(function(data, status, headers, config) {
				$scope.docs = data || "Request failed";
			});
	}
     // Scroll to appropriate position based on image index and width
     $scope.scrollTo = function(image,ind) {
         $scope.listposition = {left:(IMAGE_WIDTH * ind * -1) + "px"};
         $scope.selected = image;
     };
     
    $scope.searchDocs();
})