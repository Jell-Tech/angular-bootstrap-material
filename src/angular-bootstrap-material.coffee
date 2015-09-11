'use strict'

module = angular.module('flock.bootstrap.material', [])

inputElements = [
  'input'
  'textarea'
  'select'
]

inputDirective = ['$timeout', ($timeout) ->
  restrict: 'E'
  link: ($scope, $element) ->
    if $element.hasClass('form-control')
      $timeout ->
        $.material.input $element
        return
    else
      type = $element.attr('type')
      func = $.material[type]
      if typeof func == 'function'
        $timeout ->
          func $element
          return
    return
]

module.directive(directiveName, inputDirective) for directiveName in inputElements

###
# Add toggle button directive
###
toggleButtonDirective = ['$timeout', ($timeout) ->
  restrict: 'C'
  link: ($scope, $element) ->
    input = $($element[0]).find('label > input[type=checkbox]')
    $timeout ->
      $.material.togglebutton input
      return
    return
]

module.directive 'togglebutton', toggleButtonDirective

###
# Ripple Directives
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

