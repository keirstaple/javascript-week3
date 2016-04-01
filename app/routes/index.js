import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      this.store.findAll('question'),
      this.store.findAll('answer')
    })
  },

  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question');
    },

    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

    update(question, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    }
  }
});
