import Ember from 'ember';

export function capitalize(params /*, hash*/) {
  let [string] = params;
  return string.capitalize();
}

export default Ember.Helper.helper(capitalize);
