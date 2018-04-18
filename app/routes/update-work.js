import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    const work = this.get('store').findRecord('work', params.work_id)
    this.set('vehicleId', work.get('vehicle.id'))
    return work
  },

  actions: {
    updateWork (work) {
      work.save()
      console.log('this.vehicleId is', this.vehicleId)
        // .then(() => this.transitionTo('vehicle/' + work.vehicleId))
    }
  }
})
