'use strict';

angular.module('g1b.datetime-range', []).
  directive('datetimeRange', ['$document', function ($document) {

  return {
    restrict: 'E',
    scope: {
      start: '=',
      end: '=',
      handler: '&'
    },
    replace: true,
    templateUrl: './datetime-range.html',
    compile: function () {
      return {
        pre: function preLink() {},
        post: function postLink(scope, element) {

          // Get current date
          scope.current = moment();

          // Set selected date
          scope.setDate = function (date) {
            if ( (scope.selected === scope.start && date < scope.end) ||
              ( scope.selected === scope.end && date > scope.start ) ) {
              scope.selected.seconds(date.get('seconds')).minute(date.get('minutes')).hours(date.get('hours')).date(date.get('date')).month(date.get('month')).year(date.get('year'));
              scope.handler();
            }
          };

          // Convert start datetime to moment.js if its not a moment object yet
          if ( scope.start && !scope.start._isAMomentObject ) {
            scope.start = moment(scope.start);
          }

          // Convert end datetime to moment.js if its not a moment object yet
          if ( scope.end && !scope.end._isAMomentObject ) {
            scope.end = moment(scope.end);
          }

          // Bind click events outside directive to close edit popover
          $document.on('mousedown', function (e) {
            if ( !!scope.selected && !element[0].contains(e.target) ) {
              scope.$apply(function () {
                scope.selected = '';
                scope.calendar_active = false;
              });
            }
          });
        }
      };
    }
  };
}]);
