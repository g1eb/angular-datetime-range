# Datetime range input UI element

This directive is designed to provide easy and intuitive input of moment.js datetime objects.

Typically this can be used to represent a start and an end datetime object.  
Desgined to be as simple as possible to afford intuitive interactions, including scrolling.

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
  ......
])
```

3) Use 'datetime-range' directive in a view

```html
<datetime-range start="start" end="end"></datetime-range>
```

### Attributes

|Property        | Usage           | Default  | Required |
|:------------- |:-------------|:-----:|:-----:|
| start | Start moment.js datetime object or a datetime string | none | yes |
| end | End moment.js datetime object or a datetime string | none | yes |
| on-change | Handler function that is fired on change of start and/or end datetime objects | none | no |
| on-change-start | Handler function that is fired on change of start datetime object | none | no |
| on-change-end | Handler function that is fired on change of end datetime object | none | no |

## Dependencies

* [AngularJS](https://angularjs.org/)
* [moment.js](http://momentjs.com/)
