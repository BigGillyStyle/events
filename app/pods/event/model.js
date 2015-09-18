import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  addressLine1: DS.attr('string'),
  addressLine2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  postalCode: DS.attr('string'),
  country: DS.attr('string', {defaultValue: 'US'}),
  date: DS.attr('date')
});
