(function() {
  'use strict';
  var module, ripplesDirective;

  module = angular.module('flock.bootstrap.material', []);


  /*
   * Add Form Control directive
   */

  module.directive('formControl', [
    '$timeout', function($timeout) {
      return {
        restrict: 'C',
        link: function($scope, $element) {
          var input;
          input = $($element[0]);
          $timeout(function() {
            $.material.input(input);
          });
        }
      };
    }
  ]);


  /*
   * Add toggle button directive
   */

  module.directive('togglebutton', [
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
  ]);


  /*
   * Add radio button directive
   */

  module.directive('radio', [
    '$timeout', function($timeout) {
      return {
        restrict: 'C',
        link: function($scope, $element) {
          var input;
          input = $($element[0]).find('label > input[type=radio]');
          $timeout(function() {
            $.material.radio(input);
          });
        }
      };
    }
  ]);


  /*
   * Add checkbox directive
   */

  module.directive('checkbox', [
    '$timeout', function($timeout) {
      return {
        restrict: 'C',
        link: function($scope, $element) {
          var input;
          input = $($element[0]).find('label > input[type=checkbox]');
          $timeout(function() {
            $.material.checkbox(input);
          });
        }
      };
    }
  ]);


  /*
   * Ripple Directive Handler
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
