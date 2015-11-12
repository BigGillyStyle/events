import Ember from 'ember';

export default Ember.Component.extend({
  fromDateUpperBound: Ember.computed('maxTime', 'toDate', function() {
    let toTime = this.get('toDate').getTime();
    return new Date(Math.min(toTime, this.get('maxTime')));
  }),
  toDateLowerBound: Ember.computed('minTime', 'fromDate', function() {
    let fromTime = this.get('fromDate').getTime();
    return new Date(Math.max(fromTime, this.get('minTime')));
  }),
  setup: Ember.on('init', function() {
    let minDate = new Date(this.get('minTime'));
    this.set('dateLowerBound', minDate);
    this.set('fromDate', minDate);
    let maxDate = new Date(this.get('maxTime'));
    this.set('dateUpperBound', maxDate);
    this.set('toDate', maxDate);
  }),
  datesChanged: Ember.observer('fromDate', 'toDate', function() {
    if(!!this.get('fromDate') && !!this.get('toDate')) {
      this.attrs.dateChanged(this.get('fromDate'), this.get('toDate'));
    }
  })
});
