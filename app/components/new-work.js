import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.set('work', {
      vehicleId: this.get('vehicleId')
    })
  },

  classNameBindings: ['hideWorkForm'],
  hideWorkForm: true,

  actions: {
    createWork () {
      this.sendAction('createWork', this.get('work'))
    },

    toggleWorkForm () {
      this.toggleProperty('hideWorkForm')
    }
  }
})
