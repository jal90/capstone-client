import Component from '@ember/component'

export default Component.extend({
  vehicle: {
    make: '',
    model: '',
    year: '',
    mileage: ''
  },

  classNameBindings: ['showCreateForm'],
  showCreateForm: true,

  actions: {
    createVehicle () {
      this.sendAction('createVehicle', this.get('vehicle'))
    },
    toggleCreateForm () {
      console.log('button clicked')
      this.toggleProperty('showCreateForm')
    }
  }
})
