import { capitalize } from '../../../helpers/capitalize';
import { module, test } from 'qunit';

module('Unit | Helper | capitalize');

test('it works', function(assert) {
  let result = capitalize(['andy']);
  assert.equal(result, "Andy");
});
