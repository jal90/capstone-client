import Route from '@ember/routing/route'

export default Route.extend({
  vehicle: {
    make: '',
    model: '',
    year: ''
  },

  model () {
    return this.get('store').findAll('vehicle')
  },

  actions: {
    createVehicle (vehicle) {
      this.get('store').createRecord('vehicle', vehicle)
        .save()
    }
  }
})
