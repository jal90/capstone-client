import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'
import Ember from 'ember'

export default Route.extend({


  auth: service(),

  model () {
    return RSVP.Promise.resolve({})
  },

  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials)
        .then(() => this.get('auth').signIn(credentials))
        .then(() => this.transitionTo('vehicles'))
        .then(() => {
          this.toast
            .success('Successfully signed-up! You have also been signed-in.')
        })
        .catch(() => {
          this.toast
            .error('There was a problem. Please try again.')
        })
    }
  }
})
