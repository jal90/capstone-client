import Route from '@ember/routing/route'
import Ember from 'ember'
import RSVP from 'rsvp'
import { inject as service } from '@ember/service'

export default Route.extend({
  activate () {
    Ember.$('body').addClass('car-pic')
  },

  deactivate () {
    Ember.$('body').removeClass('car-pic')
  },

  model () {
    return RSVP.Promise.resolve({})
  },

  auth: service(),

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
        .then(() => this.transitionTo('vehicles'))
        .then(() => this.toast.success('Thanks for signing in!'))
        .catch(() => {
          this.toast
          .error('There was a problem. Please try again.')
        })
    },

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
    },

    toggleSignInForm (form) {
      Ember.$('#sign-in-form').css('display', 'inline')
      Ember.$('#sign-up-form').css('display', 'none')
      Ember.$('#sign-in-button').css('color', 'rgb(255, 192, 0')
      Ember.$('#sign-up-button').css('color', 'black')
    },
    toggleSignUpForm (form) {
      Ember.$('#sign-up-form').css('display', 'inline')
      Ember.$('#sign-in-form').css('display', 'none')
      Ember.$('#sign-up-button').css('color', 'rgb(255, 192, 0')
      Ember.$('#sign-in-button').css('color', 'black')
    }
  }
})
