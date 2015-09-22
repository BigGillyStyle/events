import Ember from 'ember';
import EventMixin from '../../../mixins/event';
import { module, test } from 'qunit';

module('Unit | Mixin | event');

// Replace this with your real tests.
test('it works', function(assert) {
  let EventObject = Ember.Object.extend(EventMixin);
  let subject = EventObject.create();
  assert.ok(subject);
});
