import Component from '@ember/component'

export default Component.extend({
  classNames: ['inline'],

  actions: {
    updateVehicle (vehicle) {
      this.sendAction('updateVehicle', vehicle)
    }
  }
})
