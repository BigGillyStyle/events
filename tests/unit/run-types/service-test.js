import { moduleFor, test } from 'ember-qunit';

moduleFor('service:run-types', 'Unit | Service | run types', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('knows what a marathon is', function(assert) {
  const service = this.subject();
  let types = service.get('types');
  let marathon = types.findBy('value', 'marathon').kilometers;
  assert.equal(marathon, 42.195);
});
