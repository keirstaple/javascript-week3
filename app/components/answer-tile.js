import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(answer, params) {
      this.sendAction('saveAnswer', answer, params);
    }
  }
});
