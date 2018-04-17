import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('vehicle', params.vehicle_id)
  },

  actions: {
    deleteVehicle (vehicle) {
      vehicle.destroyRecord()
        .then(() => this.transitionTo('vehicles'))
        .then(() => this.toast.warning('Deleted Vehicle'))
    },
    createWork (work) {
      this.get('store').createRecord('work', work).save()
    }
  }
})
