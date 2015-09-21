import {
  moduleForModel, test
}
from 'ember-qunit';

moduleForModel('event', 'Unit | Model | event', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function (assert) {
  let model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

// attribute tests
test('it has an attribute: name', function (assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('name') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: city', function (assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('city') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: state', function (assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('state') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: country', function (assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('country') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: time', function (assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('time') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: url', function (assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('url') > -1;
  assert.ok(hasAttr);
});

test('it defaults "state" to "AL"', function (assert) {
  var model = this.subject();
  assert.equal(model.get('state'), 'AL');
});
