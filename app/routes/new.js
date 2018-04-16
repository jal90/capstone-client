import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    createVehicle (vehicle) {
      this.get('store').createRecord('vehicle', vehicle).save()
      // TODO: figure out how to change toast position
        .then(() => this.toast.info('Created Vehicle'))
        .then(() => this.transitionTo('vehicles'))
        .catch(() => this.toast.error('Did not update vehicle'))
    }
  }
})
