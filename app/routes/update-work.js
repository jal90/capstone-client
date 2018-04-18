import Route from '@ember/routing/route'

export default Route.extend({
  // This model hook is being ignored, Ember is choosing the implicit one
  model (params) {
    const work = this.get('store').findRecord('work', params.work_id)
    this.set('vehicleId', work.get('vehicle.id'))
    return work
  },

  actions: {
    updateWork (work) {
      work.save()
      console.log('vehicleId is ', work.vehicleId)
        // .then(() => this.transitionTo('vehicle/' + work.vehicleId))
    }
  }
})
