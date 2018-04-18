import Route from '@ember/routing/route'

export default Route.extend({
  // This model hook is being ignored, Ember is choosing the implicit one
  model (params) {
    return this.get('store').findRecord('work', params.work_id)
  },

  work: {
    // vehicleId: work.vehicle_id
  },

  actions: {
    updateWork (work) {
      console.log('work.data is ', work.data)
      work.save()
        .then(() => this.toast.info('Updated record!'))
        .then(() => this.transitionTo(`/vehicles/${work.vehicle.id}`))
    }
  }
})
