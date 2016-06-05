'use strict';

angular.module('g1b.datetime-range', []).
  directive('datetimeRange', function () {

  return {
    restrict: 'E',
    scope: {
      start: '=',
      end: '=',
      handler: '='
    },
    replace: true,
    template: '<div class="datetime-range"></div>',
    link: function (scope, element) {

    }
  };
});
