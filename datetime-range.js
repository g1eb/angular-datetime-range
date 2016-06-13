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
        post: function postLink(scope) {

          // Convert start datetime to moment.js if its not a moment object yet
          if ( !scope.start._isAMomentObject ) {
            scope.start = moment(scope.start);
          }

          // Convert end datetime to moment.js if its not a moment object yet
          if ( !scope.end._isAMomentObject ) {
            scope.end = moment(scope.end);
          }
        }
      };
    }
  };
});
