import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateWork (work) {
      this.sendAction('updateWork', work)
    }
  }
})
