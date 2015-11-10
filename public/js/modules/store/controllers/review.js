(function(){
	angular.module('gemStore')
	.controller("ReviewController", [function(){
		var that = this;
		
		that.newReview;

		that.resetNewReview = resetNewReview;

		that.availableStars = [
			{label: '1 Star', value: 1},
			{label: '2 Stars', value: 2},
			{label: '3 Stars', value: 3},
			{label: '4 Stars', value: 4},
			{label: '5 Stars', value: 5}
		];

		that.addReview = addReview;

		function resetNewReview(){
			that.newReview = {
				stars: '',
				author: '',
				body: '',
				createdOn: ''
			};
		}

		function addReview(gem){
			that.newReview.createdOn = Date.now();
			gem.reviews.push(angular.copy(that.newReview));
			resetNewReview();
            return true;
		}

		resetNewReview();
	}]);
})();