angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.html","<div>{{ page }}</div>");}]);