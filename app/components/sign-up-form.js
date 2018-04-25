import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  classNameBindings: ['hideSignUpForm'],
  hideSignUpForm: false,

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'))
    },

    reset () {
      this.set('credentials', {})
    },

    toggleSignUpForm () {
      this.toggleProperty('hideSignUpForm')
    }
  }
})
