import Route from '@ember/routing/route'

export default Route.extend({
  vehicle: {
    make: '',
    model: '',
    year: ''
  },

  model () {
    return this.get('store').findAll('vehicle')
  }
})
