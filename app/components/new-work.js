import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.set('work', {
      vehicle: this.get('vehicle')
    })
  },

  classNameBindings: ['hideWorkForm'],
  hideWorkForm: true,

  actions: {
    createWork () {
      this.sendAction('createWork', this.get('work'))
      this.set('work.name', '')
      this.set('work.date', '')
      this.set('work.mileage', '')
      .catch(() => this.toast.error('Could not create work'))
    },

    toggleWorkForm () {
      this.toggleProperty('hideWorkForm')
    }
  }
})
