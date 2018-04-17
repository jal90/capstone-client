import Component from '@ember/component'

export default Component.extend({
  actions: {
    hi () {
      const vehicle = this.get('vehicle')
      const works = vehicle.get('works')
      console.log(works)
    }
  }

})
