twiltt.directive('autocomplete',function($document) {
	return function(scope, element, attr){
		element.bind('focus', function(){
			console.log(scope.people);
			console.log(attr);
		});

		element.bind('blur', function(){
			$document.unbind('focus');
			$document.unbind('blur');
		});
	};
}); 