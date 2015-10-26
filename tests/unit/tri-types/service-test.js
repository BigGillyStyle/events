import { moduleFor, test } from 'ember-qunit';

moduleFor('service:tri-types', 'Unit | Service | tri types', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
  beforeEach() {
    this.ironmanSwimKm = 3.86;
    this.ironmanBikeKm = 180.25;
    this.ironmanRunKm = 42.195;
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('knows what an ironman is', function(assert) {
  const service = this.subject();
  let types = service.get('types');
  let ironman = types.findBy('value', 'ironman');
  assert.equal(ironman.swimKilometers, this.ironmanSwimKm);
  assert.equal(ironman.bikeKilometers, this.ironmanBikeKm);
  assert.equal(ironman.runKilometers, this.ironmanRunKm);
});

test('should compute the totalDistance of an ironman', function(assert) {
  const service = this.subject();
  assert.equal(service.totalDistance('ironman'), this.ironmanSwimKm + this.ironmanBikeKm + this.ironmanRunKm);
});
