import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    updateVehicle (vehicle) {
      // TODO: add validation so that year and mileage are only numbers
      // maybe allow mileage to accept commas, or instruct user to not
      // use commas
      vehicle.save()
    }
  }
})
