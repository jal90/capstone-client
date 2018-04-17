import Route from '@ember/routing/route'
// import Ember from 'ember'

export default Route.extend({
  // model (params) {
  //   return Ember.RSVP.hash({
  //     vehicle: this.get('store').findRecord('vehicle', params.vehicle_id),
  //     works: this.get('store').findAll('work')
  //   })
  // },

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
