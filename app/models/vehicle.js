import DS from 'ember-data'

export default DS.Model.extend({
  make: DS.attr('string'),
  model: DS.attr('string'),
  year: DS.attr('string')
})
