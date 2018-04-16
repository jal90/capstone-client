import Component from '@ember/component'

export default Component.extend({
  vehicle: {
    make: '',
    model: '',
    year: '',
    mileage: ''
  },

  actions: {
    createVehicle () {
      this.sendAction('createVehicle', this.get('vehicle'))
    }
  }
})
