import StartView from './StartView';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new StartView())
  }
});
