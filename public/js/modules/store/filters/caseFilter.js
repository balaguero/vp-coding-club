(function(){

	angular.module('gemStore')
	.filter('case', function(){
    	return function(input, caseType) {
        	if (caseType.toLowerCase() === "upper") return input.toUpperCase();
      		if (caseType.toLowerCase() === "upper") return input.toLowerCase();
    	};
	});

})();