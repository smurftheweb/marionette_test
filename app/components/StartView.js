import template from 'templates/layout';

export default Marionette.View.extend({
  template: template,
  collection: new Backbone.Collection([
      { assignee: "Scott", text: "Write a text book" },
      { assignee: "Rob", text: "Rewrite it using brunch" }
    ])
});
