import Ember from 'ember';

export default Ember.Component.extend({
  map: null,
  events: Ember.A(),
  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.initializeMap();
      this.addEventMarkersToMap();
    });
  },
  initializeMap() {
    let that = this;
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
    m.on('popupopen', that.openPopup);
    this.set('map', m);
  },
  addEventMarkersToMap() {
    // let that = this;
    let e = this.get('events');
    let m = this.get('map');
    if (!!e) {
      e.forEach(function(event) {
        const lat = event.get('lat');
        const lon = event.get('lon');
        let marker = L.marker([lat, lon])
          .addTo(m);
        let popup = L.popup({
            className: 'popup'
          })
          .setContent(`${event.get('name')} <span class="hidden-id">${event.get('id')}</span>`);
        marker.bindPopup(popup);
      });
    }
  },
  openPopup(event) {
    Ember.$('.popup').click(function() {
      let content = event.popup.getContent();
      let [,eventId] = content.match(/<span class="hidden-id">(.*?)<\/span>/);
      Ember.$(`.${eventId}`).trigger('click');
    });
  }
});
