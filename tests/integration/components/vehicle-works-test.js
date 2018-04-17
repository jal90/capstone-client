import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vehicle-works', 'Integration | Component | vehicle works', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{vehicle-works}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#vehicle-works}}
      template block text
    {{/vehicle-works}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
