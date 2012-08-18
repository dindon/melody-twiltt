twiltt.factory('twilttStorage', function(){

	var STORAGE_ID = 'twiltt_storage';

	return {
		get: function() {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (lends) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(lends));
		}
	};

});