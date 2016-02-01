import Ember from 'ember';

export default Ember.Component.extend({
  browserify: Ember.inject.service('browserify-test'),
  init() {
    this._super();
    this.get('browserify').doStuff();
  }
});
