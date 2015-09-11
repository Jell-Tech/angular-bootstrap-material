(function() {
  'use strict';
  var directiveName, i, inputDirective, inputElements, len, module, ripplesDirective, toggleButtonDirective;

  module = angular.module('flock.bootstrap.material', []);

  inputElements = ['input', 'textarea', 'select'];

  inputDirective = [
    '$timeout', function($timeout) {
      return {
        restrict: 'E',
        link: function($scope, $element) {
          var func, type;
          if ($element.hasClass('form-control')) {
            $timeout(function() {
              $.material.input($element);
            });
          } else {
            type = $element.attr('type');
            func = $.material[type];
            if (typeof func === 'function') {
              $timeout(function() {
                func($element);
              });
            }
          }
        }
      };
    }
  ];

  for (i = 0, len = inputElements.length; i < len; i++) {
    directiveName = inputElements[i];
    module.directive(directiveName, inputDirective);
  }


  /*
   * Add toggle button directive
   */

  toggleButtonDirective = [
    '$timeout', function($timeout) {
      return {
        restrict: 'C',
        link: function($scope, $element) {
          var input;
          input = $($element[0]).find('label > input[type=checkbox]');
          $timeout(function() {
            $.material.togglebutton(input);
          });
        }
      };
    }
  ];

  module.directive('togglebutton', toggleButtonDirective);


  /*
   * Ripple Directives
   */

  ripplesDirective = [
    '$timeout', function($timeout) {
      return {
        restrict: 'C',
        link: function($scope, $element) {
          if ($element.hasClass('withoutripple') || $element.hasClass('btn-link')) {
            return;
          }
          $timeout(function() {
            $.material.ripples($element);
          });
        }
      };
    }
  ];

  module.directive('withRipples', ripplesDirective);

  module.directive('withripples', ripplesDirective);

  module.directive('cardImage', ripplesDirective);

  module.directive('btn', ripplesDirective);

}).call(this);

//# sourceMappingURL=angular-bootstrap-material.js.map
