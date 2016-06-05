# Datetime range input UI element

This datetime range input is used to fascilitate easy input of datetime objects representing a range with a start datetime and end datetime.
 
Converted into an angular directive for your convenience :)

## Demo
Click <a href="https://rawgit.com/g1eb/angular-datetime-range/master/" target="_blank">here</a> for a live demo.

## Installation

1) Install 'angular-datetime-range' with bower

```
bower install angular-datetime-range
```

2) Add 'g1b.datetime-range' module to your app config


```javascript
angular.module('myApp', [
  'g1b.datetime-range',
  .....
])
```

3) Use 'datetime-range' directive in a view

```html
<datetime-range start="start_datetime" end="end_datetime" handler="print"></datetime-range>
```

### Attributes

|Property        | Usage           | Default  | Required |
|:------------- |:-------------|:-----:|:-----:|
| start_datetime | Start datetime object | none | yes |
| end_datetime | End datetime object | none | yes |
| handler | Handler function is fired on blur of the editing panel, start_datetime and end_datetime are passed as arguments, can be used to save changed datetime objects or do something else with it | none | no |

### Example data

## Dependencies

* [AngularJS](https://angularjs.org/)
* [moment.js](http://momentjs.com/)
