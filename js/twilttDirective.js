twiltt.directive('autocomplete',function($document) {
	
	var $list = angular.element($document.find('ul')[0]);

	return function(scope, element, attr){
		element.bind('focus', function(){	
			element.bind('blur', blur);
			element.bind('keyup', keyup);
			// First shows a list of names, and 
			// on each key up, will update the list with compatible names
			

			angular.forEach(scope.people, function(value,key){
				$list.append('<li>'+value+'</li>');
			});
		});

		function blur(){
			
			// Will hide the names' container
			element.unbind('blur', blur);
			element.unbind('keyup', keyup);
			
		}

		function keyup()
		{
			// get the current value of the input
			// hide all li tags that doesn't match
			angular.forEach(angular.element($list.children()), function(value,key){
				var $elt = angular.element(value);

				if($elt.text().indexOf(scope.lendWho) > -1)
				{
					$elt.css({
						display: 'block'
					});
				}
				else
				{
					$elt.css({
						display: 'none'
					});
				}
			});
		}

	};
}); 