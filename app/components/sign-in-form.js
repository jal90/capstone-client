import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  classNameBindings: ['hideSignInForm'],
  hideSignInForm: false,

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'))
    },

    reset () {
      this.set('credentials', {})
    },

    toggleSignInForm () {
      this.toggleProperty('hideSignInForm')
    }
  }
})
