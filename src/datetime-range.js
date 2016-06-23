'use strict';

angular.module('g1b.datetime-range', []).
  directive('datetimeRange', ['$document', '$timeout', function ($document, $timeout) {

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
          scope.selectDate = function (date) {
            if ( scope.selected === date ) {
              scope.selected = undefined;
            } else {
              scope.selected = date;
              scope.calendar = scope.selected.clone();
            }
          };

          // Update selected date
          scope.setDate = function (date) {
            if ( scope.selected.isSame(date) ) { return; }
            if ( ( scope.selected === scope.start && date < scope.end ) || ( scope.selected === scope.end && date > scope.start ) ) {
              scope.selected.year(date.year()).month(date.month()).date(date.date()).hours(date.hours()).minutes(date.minutes()).seconds(date.seconds());
              scope.handler();
            } else {
              scope.warning = ( scope.selected === scope.start ) ? 'end' : 'start';
              $timeout(function () {
                scope.warning = undefined;
              }, 250);
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
