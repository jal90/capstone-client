import Route from '@ember/routing/route'
// import Ember from 'ember'

export default Route.extend({
  actions: {
    deleteVehicle (vehicle) {
      vehicle.destroyRecord()
        .then(() => this.transitionTo('vehicles'))
        .then(() => this.toast.warning('Deleted Vehicle'))
    },
    createWork (work) {
      this.get('store').createRecord('work', work).save()
    },

    deleteWork (work) {
      work.destroyRecord()
    }
  }
})
