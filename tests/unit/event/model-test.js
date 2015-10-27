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

test('should have a startDate', function(assert) {
  const today = new Date();
  let model = this.subject({
    startDate: today
  });
  assert.equal(model.get('startDate'), today);
});

test('should have a endDate', function(assert) {
  const today = new Date();
  let model = this.subject({
    endDate: today
  });
  assert.equal(model.get('endDate'), today);
});

test('should default country to US', function(assert) {
  let model = this.subject();
  assert.equal(model.get('country'), 'US');
});

test('should default state to AL', function(assert) {
  let model = this.subject();
  assert.equal(model.get('state'), 'AL');
});
