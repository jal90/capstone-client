import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  mileage: DS.attr('string'),
  date: DS.attr('string')
})
