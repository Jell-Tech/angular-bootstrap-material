# bootstrap-material-angular
Angular directives for [FezVrasta/bootstrap-material-design](https://github.com/FezVrasta/bootstrap-material-design)

## Getting Started

- Install via Bower:
```
bower install --save git@github.com:heyflock/angular-bootstrap-material.git#master
```
- Add the JavaScript to your HTML file:
```html
<script src="bower_components/angular-bootstrap-material.js/angular-bootstrap-material.js"></script>
```
- Add `flock.bootstrap.material` to your main module's list:

```js
angular.module('myApp', [
  // ...
  'flock.bootstrap.material'
]);
```

## Form Elements
Directives will automatically be applied to the following elements:
```css
input[type=text].form-control
textarea.form-control
select.form-control
input[type=radio]
input[type=checkbox]
```

## Ripples
Directives will automatically be applied to the following elements:
```css
.withripples
.with-ripples
.btn
.card-image
```
