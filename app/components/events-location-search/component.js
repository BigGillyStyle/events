import Ember from 'ember';

export default Ember.Component.extend({
  initComplete: false,
  setup: Ember.on('init', function() {
    this.set('isChecked', false);
    this.set('initComplete', true);
  }),
  isInteger(input) {
    return (Number(input) === input) && (input % 1 === 0);
  },
  kmIsValid() {
    const km = this.get('kilometers');
    if (!this.isInteger(km)) {
      Ember.get(this, 'flashMessages').danger('Kilometers must be a positive integer');
      return false;
    }
    const kmNum = Number(km);
    if (kmNum < 0) {
      Ember.get(this, 'flashMessages').danger('Kilometers must be a positive integer');
      return false;
    }
    return true;
  },
  zipIsValid() {
    const zip = this.get('zipCode');
    if (!this.isInteger(zip)) {
      Ember.get(this, 'flashMessages').danger('Invalid zip code');
      return false;
    }
    const zipNum = Number(zip);
    if (zipNum < 10000 || zipNum > 99999) {
      Ember.get(this, 'flashMessages').danger('Invalid zip code');
      return false;
    }
    return true;
  },
  inputChanged: Ember.observer('isChecked', 'kilometers', 'zipCode', function() {
    if (this.get('initComplete')) {
      if (this.get('isChecked')) {
       if (this.kmIsValid() && this.zipIsValid()) {
        const km = this.get('kilometers');
        const zip = this.get('zipCode');
        Ember.$.ajax(`http://nominatim.openstreetmap.org/search?format=json&countrycodes=us&postalcode=${zip}&limit=1`)
          .then((response) => {
            const [geo] = response;
            this.attrs.locationChanged(km, geo.lat, geo.lon);
          });
        }
      }
    }
  })
});
