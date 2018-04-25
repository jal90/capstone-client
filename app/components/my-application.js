import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'
import Ember from 'ember'

export default Component.extend({
  activate () {
    Ember.$('body').addClass('splash-page')
  },

  deactivate () {
    Ember.$('body').removeClass('splash-page')
  },

  auth: service(),

  user: alias('auth.credentials.email'),
  isAuthenticated: alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut')
    }
  }
})
