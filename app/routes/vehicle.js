import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('vehicle', params.vehicle_id)
  },

  actions: {
    updateVehicle (vehicle) {
      // TODO: add validation so that year and mileage are only numbers
      // maybe allow mileage to accept commas, or instruct user to not
      // use commas
      vehicle.save()
    },
    deleteVehicle (vehicle) {
      vehicle.destroyRecord()
        .then(() => this.transitionTo('vehicles'))
    }
  }
})
