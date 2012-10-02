angular.module("twiltt", [])
	.directive('melodyTwiltt', function() {
		return {
			restrict: 'E',
			// link: function(scope, element, attrs) {
			// 	element.html("bouya");
			// }
			templateUrl: 'partials/twiltt_template.html',
			link: function(scope, element, attrs) {
				scope.click = function(){
					console.log("It's alive !!!!");
				};
			}
		}
	});

function TwilttCtrl($scope)
{
	$scope.media = {title:"b", person: "a"};
}