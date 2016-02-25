import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
    return this.store.findAll('node');
  },
  actions: {
    addOne() {
      var store = this.store;

      var node = store.createRecord('node', {
        name: 'Test Node',
        nodeId: '38de38de38',
        defaultProfile: 'test'
      });



      node.save().then(function(node) {
        var hardware1 = store.createRecord('hardware', {
          name: 'green button',
          gpio: 5,
          type: 'button',
          node: node
        });

        var hardware2 = store.createRecord('hardware', {
          name: 'red button',
          gpio: 6,
          type: 'button',
          node: node
        });

        hardware1.save();
        hardware2.save();
      });


      // var post = store.createRecord('post', {
      //   title: 'sdf',
      //   body: 'Lorem ipsum'
      // });
      //
      // store.findRecord('user', 1).then(function(user) {
      //   post.set('author', user);
      // });


    }
  }

});
