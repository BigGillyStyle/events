import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  races: DS.hasMany('race'),

  name: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string', {
    defaultValue: 'AL'
  }),
  country: DS.attr('string', {
    defaultValue: 'US'
  }),

  // start date (some events are multiple days and will have an end date)
  startAtTime: DS.attr('number'),
  startAtDate: Ember.computed('startAtTime', {
    get() {
        return new Date(this.get('startAtTime'));
      },
    set(key, value) {
      this.set('startAtTime', (new Date(value).getTime()));
      return value;
    }
  }),
  endAtTime: DS.attr('number'),
  endAtDate: Ember.computed('endAtTime', {
    get() {
        return new Date(this.get('endAtTime'));
      },
    set(key, value) {
      this.set('endAtTime', (new Date(value).getTime()));
      return value;
    }
  }),

  url: DS.attr('string')
});
