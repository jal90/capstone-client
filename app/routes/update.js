import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    updateVehicle (vehicle) {
      vehicle.save()
      // TODO: figure out how to change toast position
        .then(() => this.toast.info('Updated Vehicle'))
        .then(() => this.transitionTo('vehicle', vehicle.id))
        .catch(() => this.toast.error('Did not update vehicle'))
    }
  }
})
