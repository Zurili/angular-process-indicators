# angular-process-indicators
Custom errors for Node.js.

[![Build Status](https://travis-ci.org/Zurili/angular-process-indicators.svg?branch=master)](https://travis-ci.org/Zurili/angular-process-indicators)
[![npm version](https://badge.fury.io/js/angular-process-indicators.svg)](https://badge.fury.io/js/angular-process-indicators)

### Components
- Animated process indicator.
- Button with process indicator icon.

### Setting up

```sh
# Install module
$ npm i -S angular-process-indicators
```

```js
// Add to the app
angular.module('MyApp', ['angular-progress-indicators']);
```

### Usage

The animated process indicator is helpful when you need to load/save your data. To make it work insert `animated-process-indicators` into your template, and initialize `is-visible` attribute. When it's true, the indicator is shown, otherwise hiden.

```html
<animated-process-indicators is-visible="$ctrl.isLoading"></animated-process-indicators>
<div ng-if="!$ctrl.isLoading">Data is loaded!</div>
```

The button with process indicator can be used when you need to display a process indicator until the asynchronous process is not finished. Insert `button-process-indicator` component into your template and set `button-css-class`, `button-text`, `is-processing` and `action` attributes.

```html
<button-process-indicator
  button-css-class="btn btn-default btn-primary"
  button-text="Save"
  is-processing="$ctrl.isSaving"
  action="$ctrl.save()">
</button-process-indicator>
```


### API

#### `animated-process-indicators`

  - **isVisible** - hides or shows a process indicator.

#### `button-process-indicator`

  - **buttonCssClass** - space separated button css classes.
  - **buttonText** - button text.
  - **isDisabled** - disables the button when set to true.
  - **isProcessing** - hides or shows a process indicator.
  - **action** - an even is called when a button is clicked.

### Author
Alexander Mac


### License
[MIT License](license)
