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
    templateUrl: 'datetime-range.html',
    compile: function () {
      return {
        pre: function preLink() {},
        post: function postLink() {}
      };
    },
    controller: function ($scope) {
      $scope.weekdays = moment.weekdaysShort();
      $scope.dates = Array.apply(null, Array(35)).map(function(e,i){ return i+1; });
    }
  };
});
