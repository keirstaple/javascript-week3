import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(answer, params) {
      this.sendAction('saveAnswer', answer, params);
    },

    // delete(answer) {
    //   if (confirm("Are you sure you want to delete your answer?")) {
    //     this.sendAction('destroyAnswer', answer);
    //   }
    // }
  }
});
