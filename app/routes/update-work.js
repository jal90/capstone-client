import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    updateWork (work) {
      console.log('work.data is ', work.data)
      work.save()
        .then(() => this.toast.info('Updated record!'))
        .then(() => this.transitionTo(`/vehicles/${work.get('vehicle.id')}`))
    }
  }
})
