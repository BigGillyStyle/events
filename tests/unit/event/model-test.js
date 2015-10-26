import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('event', 'Unit | Model | event', {
  // Specify the other units that are required for this test.
  needs: ['model:race']
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('should belong to an race', function(assert) {
  const event = this.store().modelFor('event');
  const relationship = Ember.get(event, 'relationshipsByName').get('races');

  assert.equal(relationship.key, 'races', 'has relationship with race');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is belongsTo');
});

test('should have a startAtDate', function(assert) {
  const today = new Date();
  let model = this.subject({
    startAtDate: today
  });
  assert.equal(model.get('startAtDate'), today);
});

test('should have a endAtDate', function(assert) {
  const today = new Date();
  let model = this.subject({
    endAtDate: today
  });
  assert.equal(model.get('endAtDate'), today);
});
