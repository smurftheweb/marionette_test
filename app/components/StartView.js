import template from 'templates/layout';

export default Marionette.View.extend({
  template: template,
  model: new Backbone.Model({
    items: [
      { assignee: "Scott", text: "Write a text book" },
      { assignee: "Rob", text: "Rewrite it using brunch" }
    ]
  })
});
