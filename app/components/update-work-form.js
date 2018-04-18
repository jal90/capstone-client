import Component from '@ember/component'

export default Component.extend({
  work: {
    // vehicleId: work.vehicle.id
  },
  actions: {
    updateWork (work) {
      this.sendAction('updateWork', work)
    }
  }
})
