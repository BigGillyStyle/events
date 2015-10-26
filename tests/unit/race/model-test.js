import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('race', 'Unit | Model | race', {
  // Specify the other units that are required for this test.
  needs: ['model:event', 'service:run-types', 'service:distance-converter']
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('should belong to an event', function(assert) {
  const race = this.store().modelFor('race');
  const relationship = Ember.get(race, 'relationshipsByName').get('event');

  assert.equal(relationship.key, 'event', 'has relationship with event');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});

test('should return a shortNameLabel', function(assert) {
  let model = this.subject({
    type: 'run',
    shortName: 'marathon'
  });
  assert.equal(model.get('shortNameLabel'), 'Marathon');
});

test('should indicate that it isRun', function(assert) {
  let model = this.subject({
    type: 'run'
  });
  assert.equal(model.get('isRun'), true);
});

test('should convert bikeKilometers to bikeMiles', function(assert) {
  const hundred = 100;
  let model = this.subject({
    bikeKilometers: hundred
  });
  assert.equal(model.get('bikeMiles'), hundred * 0.621371);
});

test('should default type to run', function(assert) {
  let model = this.subject();
  assert.equal(model.get('type'), 'run');
});

test('should default surface to road', function(assert) {
  let model = this.subject();
  assert.equal(model.get('surface'), 'road');
});
