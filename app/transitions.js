export default function() {
  this.transition(
    this.fromRoute('event.new'),
    this.toRoute('event.race.new'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
