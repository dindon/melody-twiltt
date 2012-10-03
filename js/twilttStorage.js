twiltt.factory('twilttStorage', function(){

	var STORAGE_ID = 'twiltt_storage';

	return {
		getLends: function() {
			return JSON.parse(localStorage.getItem(STORAGE_ID + '_lends') || '[]');
		},

		putLends: function (lends) {
			localStorage.setItem(STORAGE_ID + '_lends', JSON.stringify(lends));
		},

		getPeople: function() {
			return JSON.parse(localStorage.getItem(STORAGE_ID + '_people') || '[]');
		},

		putPeople: function(people) {
			localStorage.setItem(STORAGE_ID + '_people', JSON.stringify(people));
		}
	};

});