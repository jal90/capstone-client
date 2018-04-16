import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    updateVehicle (vehicle) {
      // TODO: add validation so that year and mileage are only numbers
      // maybe allow mileage to accept commas, or instruct user to not
      // use commas
      vehicle.save()
      // TODO: figure out how to change toast position
        .then(() => this.toast.info('Updated Vehicle'))
        .then(() => this.transitionTo('vehicle', vehicle))
        .catch(() => this.toast.error('Did not update vehicle'))
    }
  }
})
