import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string', {defaultValue: 'AL'}),
  country: DS.attr('string', {defaultValue: 'US'}),
  date: DS.attr('number'),
  url: DS.attr('string')
});
