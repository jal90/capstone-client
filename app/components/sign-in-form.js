import Component from '@ember/component'
import Ember from 'ember'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  // classNameBindings: ['hideSignInForm'],
  // hideSignInForm: true,

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'))
    },
    submitUp () {
      this.sendAction('submitUp', this.get('credentials'))
    },

    reset () {
      this.set('credentials', {})
    },

    toggleSignInForm () {
      this.sendAction('toggleSignInForm', this)
    },
    toggleSignUpForm () {
      this.sendAction('toggleSignUpForm', this)
    }
  }
})
