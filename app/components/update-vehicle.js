import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateVehicle (vehicle) {
      this.sendAction('updateVehicle', vehicle)
    }
  }
})
