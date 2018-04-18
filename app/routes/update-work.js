import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    updateWork (work) {
      work.save()
        .then(() => this.toast.info('Updated record!'))
        .then(() => this.transitionTo(`/vehicles/${work.get('vehicle.id')}`))
        .catch(() => this.toast.error('Could not update record'))
    }
  }
})
