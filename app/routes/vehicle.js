import Route from '@ember/routing/route'
// import Ember from 'ember'

export default Route.extend({
  actions: {
    deleteVehicle (vehicle) {
      vehicle.destroyRecord()
        .then(() => this.transitionTo('vehicles'))
        .then(() => this.toast.warning('Deleted Vehicle'))
        .catch(() => this.toast.error('Could not delete vehicle. Please make sure all vehicle works are deleted'))
    },
    createWork (work) {
      this.get('store').createRecord('work', work)
        .save()
        .catch(() => this.toast.error('Could not create work'))
    },

    deleteWork (work) {
      work.destroyRecord()
        .catch(() => this.toast.error('Could not delete work'))
    }
  }
})
