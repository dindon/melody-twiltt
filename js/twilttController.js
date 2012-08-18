twiltt.controller('TwilttCtrl', function TwilttCtrl($scope, twilttStorage){
	var lends = $scope.lends = twilttStorage.get();

	$scope.$watch('lends', function() {
		twilttStorage.put(lends);
	}, true);

	$scope.addLend = function(){
		lends.push({text:$scope.lendText, who:$scope.lendWho});
		$scope.lendText = '';
		$scope.lendWho = '';
	};

	$scope.deleteLend = function(){

	};
});