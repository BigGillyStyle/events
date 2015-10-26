import { moduleFor, test } from 'ember-qunit';

moduleFor('service:distance-converter', 'Unit | Service | distance converter', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
  beforeEach() {
    this.kmToMiles = 0.621371;
    this.milesToKm = 1.60934;
  }
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('knows what miles are', function(assert) {
  const service = this.subject();
  let types = service.get('units');
  let marathon = types.findBy('value', 'miles').multiplyToKM;
  assert.equal(marathon, this.milesToKm);
});

test('should convert from kilometers to miles', function(assert) {
  const service = this.subject();
  let tenK = service.convertToMiles(10, 'kilometers');
  assert.equal(tenK, 10 * this.kmToMiles);
});

test('should convert from miles to kilometers', function(assert) {
  const service = this.subject();
  let tenK = service.convertToKilometers(5, 'miles');
  assert.equal(tenK, 5 * this.milesToKm);
});
