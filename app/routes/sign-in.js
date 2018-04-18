import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),

  model () {
    return RSVP.Promise.resolve({})
  },

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
        .then(() => this.transitionTo('vehicles'))
        .then(() => this.toast.success('Thanks for signing in!'))
        .catch(() => {
          this.toast
          .error('There was a problem. Please try again.')
        })
    }
  }
})
