//import template from 'templates/layout';
import todoitem from 'templates/todoitem';

var childView = Marionette.View.extend({
  tagName: 'li',
  template: todoitem
});

export default Marionette.CollectionView.extend({
  tagName: 'ul',
  //template: template,
  childView: childView,
  collection: new Backbone.Collection([
      { author: "Scott", text: "Write a text book" },
      { author: "Rob", text: "Rewrite it using brunch" },
      { author: "Rob", text: "Rewrite it using brunch" },
      { author: "Rob", text: "Rewrite it using brunch" },
      { author: "Rob", text: "Rewrite it using brunch" }
    ]),

    filter: function(child, item, collection) {
      return child.get('author') === "Rob";
    }
});
