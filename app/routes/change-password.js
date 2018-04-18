import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),

  model () {
    return RSVP.Promise.resolve({})
  },

  actions: {
    changePassword (passwords) {
      if (passwords.next === passwords.confirmNext) {
        this.get('auth').changePassword(passwords)
        .then(() => this.get('auth').signOut())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.toast.success('Successfully changed your password!')
        })
        .then(() => {
          this.toast.info('You have been signed out.')
        })
        .catch(() => {
          this.toast
          .error('There was a problem. Please try again.')
        })
      } else {
        this.toast
        .error('Your new passwords must match.')
      }
    },

    reset () {
      this.transitionTo('vehicles')
    }
  }
})
