function LendCtrl($scope)
{
	if(localStorage.getItem('twiltt_lends') == null)
		$scope.lends = [];
	else
		$scope.lends = JSON.parse(localStorage.getItem('twiltt_lends'));	

	$scope.addLend = function()
	{
		$scope.lends.push({text:$scope.lendText, who:$scope.lendWho});
		$scope.lendText = '';
		$scope.lendWho = '';

		localStorage.setItem('twiltt_lends',JSON.stringify($scope.lends));
	};

	$scope.deleteLEnd = function()
	{

	};
}