import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  }

  // actions: {
  //   destroyAnswer(answer) {
  //     answer.destroyRecord();
  //     this.transitionTo('index');
  //   }
  // }
});
