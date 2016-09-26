function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			$scope.count = 0;
		},
		link: function (scope, element) {
			// increment count when clicked on
			element.on('click', function () {
				scope.count++;
				scope.$apply();
			});
			// unbind the event when the directive is destroyed
			scope.$on('$destroy', function () {
				element.off();
			})
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);
