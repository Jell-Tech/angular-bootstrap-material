(function() {
  'use strict';

  var module = angular.module('flock.bootstrap.material', []);

  var inputElements = [
    'input',
    'textarea',
    'select'
  ];

  var inputDirective = [function() {
    return {
      restrict: 'E',
      link: function($scope, $element) {
        if ($element.hasClass('form-control')) {
          $.material.input($element);
        } else {
          var type = $element.attr('type');
          if (type !== 'checkbox') {
            var func = $.material[type];
            if (typeof(func) === 'function') {
              func($element);
            }
          }
        }
      }
    };
  }];

  for (var i = 0; i < inputElements.length; i++) {
    module.directive(inputElements[i], inputDirective);
  }


  var ripplesDirective = [function() {
    return {
      restrict: 'C',
      link: function($scope, $element) {
        if ($element.hasClass('withoutripple') || $element.hasClass('btn-link')) {
          return;
        }
        $.material.ripples($element);
      }
    };
  }];

  var checkboxDirective = [function() {
    return {
      restrict: 'C',
      link: function($scope, $element) {
        $element.find('input[type=checkbox]').each(function() {
          $.material.checkbox($(this));
        });
      }
    };
  }];

  var toggleButtonDirective = [function() {
    return {
      restrict: 'C',
      link: function($scope, $element) {
        var inputs = $element.find('label input[type=checkbox]');

        if (inputs.length) {
          $.material.togglebutton($(inputs[0]));
        }
      }
    };
  }];

  module.directive('togglebutton', toggleButtonDirective);

  module.directive('checkbox', checkboxDirective);
  module.directive('checkboxInline', checkboxDirective);

  module.directive('withRipples', ripplesDirective);
  module.directive('withripples', ripplesDirective);
  module.directive('cardImage', ripplesDirective);
  module.directive('btn', ripplesDirective);

})();
