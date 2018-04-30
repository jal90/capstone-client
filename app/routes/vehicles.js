import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import Ember from 'ember'

export default Route.extend({
  activate () {
    Ember.$('body').addClass('vehicles-pic')
  },

  deactivate () {
    Ember.$('body').removeClass('vehicles-pic')
  },

  auth: service(),

  vehicle: {
    make: '',
    model: '',
    year: ''
  },

  model () {
    return this.get('store').findAll('vehicle')
  },

  actions: {
    signOut () {
      this.get('auth').signOut()
        .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('application'))
        .then(() => {
          this.toast.info('You have been signed out.')
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Are you sure you\'re signed-in?')
        })
    }
  }
})
