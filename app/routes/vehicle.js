import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('vehicle', params.vehicle_id)
  }
})
