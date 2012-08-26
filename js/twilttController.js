twiltt.controller('TwilttCtrl', function TwilttCtrl($scope, twilttStorage){
	var lends = $scope.lends = twilttStorage.getLends();
	//var people = $scope.people = twilttStorage.getPeople();
	var people = $scope.people = twilttStorage.getPeople();

	$scope.editedLend = null;

	$scope.$watch('lends', function() {
		twilttStorage.putLends(lends);
	}, true);

	$scope.$watch('people', function() {
		twilttStorage.putPeople(people);
	}, true);


	$scope.addLend = function(){
		lends.push({text:$scope.lendText, who:$scope.lendWho});
		
		if($scope.checkPeople($scope.lendWho))
			$scope.savePeople($scope.lendWho);

		$scope.lendText = '';
		$scope.lendWho = '';
	};

	$scope.deleteLend = function(lend){
		lends.splice(lends.indexOf(lend),1);
	};

	$scope.editLend = function(lend){
		$scope.editedLend = lend;
	};

	$scope.dismissEditForm = function(){
		
		if($scope.checkPeople($scope.editedLend.who))
			$scope.savePeople($scope.editedLend.who);

		$scope.editedLend = null;
	};

	$scope.checkPeople = function(name){
		return people.indexOf(name) == -1;
	};

	$scope.savePeople = function(name){
		people.push(name);
	}
});