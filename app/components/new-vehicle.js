import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.set('vehicle', {
      // These fields aren't necessary, I just included them to be explicit
      // The keys and values are actually being set by the form in the hbs file
      //   make: '',
      //   model: '',
      //   year: '',
      //   mileage: ''
    })
  },
  // Code below is valid, but code above will reset fields each time page
  // is loaded! And either version is required to send the data up the chain.
  // When `createVehicle` gets called, these options are how it finds this.get('vehicle')
  // vehicle: {
  //   make: '',
  //   model: '',
  //   year: '',
  //   mileage: ''
  // },

  // classNameBindings: ['showCreateForm'],
  // showCreateForm: true,

  actions: {
    createVehicle () {
      this.sendAction('createVehicle', this.get('vehicle'))
    }
    // toggleCreateForm () {
    //   console.log('button clicked')
    //   this.toggleProperty('showCreateForm')
    // }
  }
})
