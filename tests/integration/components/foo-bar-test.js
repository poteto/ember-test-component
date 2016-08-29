import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { registerTestComponent, unregisterTestComponent } from 'ember-test-component';
import layout from 'dummy/templates/components/foo-bar';

moduleForComponent('ui-parent', 'Integration | Component | ui parent', {
  integration: true,
  beforeEach({ test: testCtx }) {
    unregisterTestComponent(testCtx.testEnvironment);
  }
});

test('it can be used with dependency injected components', function(assert) {
  registerTestComponent(this, {
    foo: "i'm a dummy",
    layout: hbs`
      <p>{{foo}}</p>
    `
  });

  this.render(hbs`
    {{ui-parent ui=(hash
        child-component=(component "test-component"))
    }}
  `);
  assert.equal(this.$().text().trim(), "i'm a dummy");
});

test('it creates a test component with inline layout', function(assert) {
  registerTestComponent(this, {
    foo: "i'm a dummy",
    layout: hbs`
      <p>{{foo}}</p>
    `
  });

  this.render(hbs`{{test-component}}`);
  assert.equal(this.$().text().trim(), "i'm a dummy");
});

test('it creates a test component with imported layout', function(assert) {
  registerTestComponent(this, {
    layout,
    foo: "i'm a dummy"
  });

  this.render(hbs`{{test-component}}`);
  assert.equal(this.$().text().trim(), "i'm a dummy");
});

test('it does not leak', function(assert) {
  this.render(hbs`{{test-component}}`);
  assert.notOk(this.$('dummy').length, 'should not leak');
});
