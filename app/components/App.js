import StartView from './StartView';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    var start = new StartView();
    this.showView(start);

    start.collection.add({ author: "Test", text: "Hello" });
  }
});
