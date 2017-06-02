import Ember from 'ember';

const { Component, getOwner } = Ember;
const assign = Ember.assign || Ember.merge;

export function registerTestComponent(context, opts = {}) {
  let owner = getOwner(context);
  let options = assign({ tagName: 'dummy' }, opts);
  let TestComponent = Component.extend(options);

  unregisterTestComponent(context);
  owner.register('component:test-component', TestComponent);
}

export function unregisterTestComponent(context) {
  let owner = getOwner(context);

  if (owner.resolveRegistration('component:test-component')) {
    owner.unregister('component:test-component');
  }
}

export default registerTestComponent;
