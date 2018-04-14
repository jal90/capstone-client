import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),

  user: alias('auth.credentials.email'),
  isAuthenticated: alias('auth.isAuthenticated'),

  tagName: 'div',
  classNames: ['navbar-header'],

  actions: {
    formatUser (user) {
      this.get('store').findAll('user')
    }
  }
})
