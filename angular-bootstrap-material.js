(function() {
  'use strict';

  var module = angular.module('flock.bootstrap.material', []);

  var inputElements = [
    'input',
    'textarea',
    'select'
  ];

  var inputDirective = ['$timeout', function($timeout) {
    return {
      restrict: 'E',
      link: function($scope, $element) {
        if ($element.hasClass('form-control')) {
          $timeout(function(){
            $.material.input($element);
          });
        } else {
          var type = $element.attr('type');
          var func = $.material[type];
          if (typeof(func) === 'function') {
            $timeout(function(){
              func($element);
            });
          }
        }
      }
    };
  }];

  for (var i = 0; i < inputElements.length; i++) {
    module.directive(inputElements[i], inputDirective);
  }


  var ripplesDirective = ['$timeout', function($timeout) {
    return {
      restrict: 'C',
      link: function($scope, $element) {
        if ($element.hasClass('withoutripple') || $element.hasClass('btn-link')) {
          return;
        }

        $timeout(function(){
          $.material.ripples($element);
        });
      }
    };
  }];

  module.directive('withRipples', ripplesDirective);
  module.directive('withripples', ripplesDirective);
  module.directive('cardImage', ripplesDirective);
  module.directive('btn', ripplesDirective);

})();
