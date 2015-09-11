'use strict'

module = angular.module('flock.bootstrap.material', [])

###
# Add Form Control directive
###
module.directive 'formControl', ['$timeout', ($timeout) ->
  restrict: 'C'
  link: ($scope, $element) ->
    input = $($element[0])
    $timeout ->
      $.material.input input
      return
    return
]

###
# Add toggle button directive
###
module.directive 'togglebutton', ['$timeout', ($timeout) ->
  restrict: 'C'
  link: ($scope, $element) ->
    input = $($element[0]).find('label > input[type=checkbox]')
    $timeout ->
      $.material.togglebutton input
      return
    return
]

###
# Add radio button directive
###
module.directive 'radio', ['$timeout', ($timeout) ->
  restrict: 'C'
  link: ($scope, $element) ->
    input = $($element[0]).find('label > input[type=radio]')
    $timeout ->
      $.material.radio input
      return
    return
]

###
# Add checkbox directive
###
module.directive 'checkbox', ['$timeout', ($timeout) ->
  restrict: 'C'
  link: ($scope, $element) ->
    input = $($element[0]).find('label > input[type=checkbox]')
    $timeout ->
      $.material.checkbox input
      return
    return
]

###
# Ripple Directive Handler
###
ripplesDirective = ['$timeout', ($timeout) ->
  restrict: 'C'
  link: ($scope, $element) ->
    if $element.hasClass('withoutripple') or $element.hasClass('btn-link')
      return
    $timeout ->
      $.material.ripples $element
      return
    return
]

module.directive 'withRipples', ripplesDirective
module.directive 'withripples', ripplesDirective
module.directive 'cardImage', ripplesDirective
module.directive 'btn', ripplesDirective

