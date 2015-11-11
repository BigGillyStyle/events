import Ember from 'ember';

export default Ember.Component.extend({
  map: null,
  markers: Ember.ArrayProxy.create({ content: Ember.A([]) }),
  eventsChanged: Ember.observer('events.[]', function() {
    this.removeAllMarkersFromMap();
    this.addEventMarkersToMap();
  }),
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
    let e = this.get('events');
    let m = this.get('map');
    if (!!e) {
      e.forEach((event) => {
        const lat = event.get('lat');
        const lon = event.get('lon');
        let marker = L.marker([lat, lon]).addTo(m);
        let popup = L.popup({
            className: 'popup'
          })
          .setContent(`${event.get('name')} <span class="hidden-id">${event.get('id')}</span>`);
        marker.bindPopup(popup);
        this.get('markers').addObject(marker);
      });
    }
  },
  removeAllMarkersFromMap() {
    let _map = this.get('map');
    let _markers = this.get('markers');
    _markers.forEach((marker) => {
      _map.removeLayer(marker);
    });
    _markers.clear();
  },
  openPopup(event) {
    Ember.$('.popup').click(function() {
      let content = event.popup.getContent();
      let [,eventId] = content.match(/<span class="hidden-id">(.*?)<\/span>/);
      Ember.$(`.${eventId}`).trigger('click');
    });
  }
});
