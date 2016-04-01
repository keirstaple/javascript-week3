import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
