import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('event-form', 'Integration | Component | event form', {
  integration: true
});

test('it renders', function (assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{event-form}}`);

  assert.equal(this.$().find('label[for="name1"]').text().trim(), 'Name');
});
