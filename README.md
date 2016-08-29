# ember-test-component ![Download count all time](https://img.shields.io/npm/dt/ember-test-component.svg) [![CircleCI](https://circleci.com/gh/poteto/ember-test-component.svg?style=shield)](https://circleci.com/gh/poteto/ember-test-component) [![npm version](https://badge.fury.io/js/ember-test-component.svg)](https://badge.fury.io/js/ember-test-component) [![Ember Observer Score](http://emberobserver.com/badges/ember-test-component.svg)](http://emberobserver.com/addons/ember-test-component)

Test helper for using dependency injected components. Read the [blog post](https://emberway.io/component-dependency-injection-in-ember-js-a46a39a5d30a#.6do6b9t6o) for more detail on using dependency injection (DI) to reduce coupling of your components.

Compatible with Ember LTS (`2.4.x`) and up only.

```
ember install ember-test-component
```

## Dependency injection for the UI layer

Let's say you have a parent component with a number of child components in its template. Using dependency injection (DI) means that we pass in the child components to the parent component as opposed to using them directly in the parent's template. For example, here is how you would pass components into your parent component:

```hbs
<!-- application.hbs -->
{{edit-location 
    ui=(hash
      location-map=(component "google-map")
      location-form=(component "edit-location-form")
      location-activity=(component "location-activity"))
}}
```

Then, in your parent component's template:

```hbs
<!-- components/edit-location.hbs -->

{{ui.location-map foo="foo"}}
{{ui.location-form bar="bar"}}
{{ui.location-activity baz="baz"}}
```

## Usage

Now in your parent component's integration test, we can register a test component (called `test-component`) which will be used in place of our child components.

First, we'll need to add a small bit of setup by importing the test helpers and setting up `beforeEach` hooks:

```js
import { registerTestComponent, unregisterTestComponent } from 'ember-test-component';

moduleForComponent('...', {
  integration: true,
  beforeEach({ test: testCtx }) {
    unregisterTestComponent(testCtx.testEnvironment);
  }
});
```

This will ensure the `test-component` will not leak to other tests. Then, we can use `registerTestComponent` to make our `test-component`.

```js
test('it does something', function(assert) {
  registerTestComponent(this);
  this.render(hbs`
    {{edit-location ui=(hash
        location-map=(component "test-component")
        location-form=(component "test-component")
        location-activity=(component "test-component"))
    }}
  `);
  // ...
});
```

Optionally, the options passed to `registerTestComponent` is an object that is the same kind of object you would pass to `Ember.Component.extend`, meaning you can make use of component hooks, computed properties and so forth. For most cases, you won't need to pass in too many things since you should not be testing a dependency in the parent component's test. Here is a simple example using inline layouts:

```js
test('it does something', function(assert) {
  registerTestComponent(this, {
    foo: "i'm a dummy",
    layout: hbs`
      <p>{{foo}}</p>
    `
  });
  // ...
});
```

You can even pass it a `hbs` file as a layout:

```js
import layout from 'my-app/templates/components/foo-bar';

test('it does something', function(assert) {
  registerTestComponent(this, {
    layout,
    foo: "i'm a dummy"
  });
  # ... 
});
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
