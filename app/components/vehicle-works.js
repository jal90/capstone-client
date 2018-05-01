import Component from '@ember/component'

export default Component.extend({

  actions: {

    deleteWork (work) {
      if (confirm('Are you sure you want to delete this work?')) {
        this.sendAction('deleteWork', work)
      }
    }
  }

})
