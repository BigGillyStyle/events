import Ember from 'ember';

export default Ember.Component.extend({
  map: null,
  events: Ember.A(),
  initializeMap() {
    let m = this.get('map');
    if (!!m) {
      m.remove();
    }
    m = L.map('map')
      .setView([38.5194564, -95.9586015], 4);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
      .addTo(m);
    L.Icon.Default.imagePath = 'leaflet/dist/images';
    this.set('map', m);
  },
  addEventMarkersToMap() {
    let e = this.get('events');
    let m = this.get('map');
    if (!!e) {
      e.forEach(function(event) {
        const lat = event.get('lat');
        const lon = event.get('lon');
        let marker = L.marker([lat, lon]).addTo(m);
        marker.bindPopup(`<a href="/events/${event.get('id')}">${event.get('name')}</a>`);
      });
    }
  },
  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.initializeMap();
      this.addEventMarkersToMap();
    });
  }
});
