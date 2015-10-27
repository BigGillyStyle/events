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
  lat: DS.attr('number'),
  lon: DS.attr('number'),
  // start date (some events are multiple days and will have an end date)
  startTime: DS.attr('number'),
  startDate: Ember.computed('startTime', {
    get() {
      return new Date(this.get('startTime'));
    },
    set(key, value) {
      this.set('startTime', (new Date(value)
        .getTime()));
      return value;
    }
  }),
  endTime: DS.attr('number'),
  endDate: Ember.computed('endTime', {
    get() {
        return new Date(this.get('endTime'));
    },
    set(key, value) {
      this.set('endTime', (new Date(value)
        .getTime()));
      return value;
    }
  }),
  url: DS.attr('string'),
  saveWithGeo: function() {
    const city = this.get('city');
    const state = this.get('state');
    Ember.$.ajax(`http://nominatim.openstreetmap.org/search?format=json&city=${city}&state=${state}&limit=1`)
      .then((response) => {
        const geo = response[0];
        this.set('lat', geo.lat);
        this.set('lon', geo.lon);
        this.save();
      });
  }
});
