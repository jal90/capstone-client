import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.set('vehicle', {})
  },

  actions: {
    createVehicle () {
      this.sendAction('createVehicle', this.get('vehicle'))
    }
  }
})
