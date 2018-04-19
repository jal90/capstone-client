import Route from '@ember/routing/route'
// import Ember from 'ember'
import RSVP from 'rsvp'

export default Route.extend({
  model (params) {
    return RSVP.hash({
      vehicle: this.get('store').findRecord('vehicle', params.vehicle_id),
      works: this.get('store').findAll('work')
      // works: this.get('store').query('work', { vehicle: params.vehicle_id})
      // return this.get('store').query('item', { search: searchQuery })
    })
  },

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
