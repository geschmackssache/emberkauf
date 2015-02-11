import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('offers', { path: '/' });
  this.route('offer', { path: ':offer_id' });
});

export default Router;
