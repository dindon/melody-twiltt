angular.module("twiltt", [])
	.directive("melodyTwiltt", function(melodyTwilttStorage) {
		return {
			restrict: 'E',
			templateUrl: 'partials/twiltt_template.html',
			link: function(scope, element, attrs) {
				
				scope.lends = melodyTwilttStorage.get();

				scope.$watch('lends', function() {
					melodyTwilttStorage.put(scope.lends);
				}, true);

				scope.addLend = function(){
					scope.lends.push({text: scope.lendText, who: scope.lendWho});
					scope.lendText = scope.lendWho = "";
				};

				scope.editLend = function(lend){
					scope.editedLend = lend;
				};

				scope.deleteLend = function(lend){
					scope.lends.splice(scope.lends.indexOf(lend),1);
				};

				scope.dismissEditForm = function(){
					scope.editedLend = null;
				};
			}
		}
	})

	.factory('melodyTwilttStorage', function() {

		var STORAGE_ID = "melody_twiltt_storage";

		return {
			get: function(){
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			put: function(lends){
				localStorage.setItem(STORAGE_ID, JSON.stringify(lends));
			}
		};

	})

	.factory("melodyTwilttApi", function() {
		return {
			isLent: function(somethingsName) {
				return false;
			}

		};

	});