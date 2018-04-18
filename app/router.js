import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('users')
  this.route('vehicles')
  this.route('new', { path: '/vehicles/new' })
  this.route('vehicle', { path: '/vehicles/:vehicle_id' }
  // , function () {
    // this.route('edit-work')
  // }
)
  this.route('update', { path: '/vehicles/:vehicle_id/update' })
  this.route('works')
  this.route('update-work', { path: '/work/:work_id' })
})

export default Router
