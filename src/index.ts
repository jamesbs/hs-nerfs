import { module, bootstrap } from 'angular'
import * as ngRoute from 'angular-route'
import 'ng-meta'
import './googlee03f76ed3404260f.html'
import routes from './routes'
import { AppComponent } from './app.component'

import './app.component.css'

export const app = module('app', [
    ngRoute,
    'ngMeta',
    ...routes
  ])
  .component('appRoot', AppComponent)
  .config(($routeProvider, $locationProvider) => {
    $locationProvider.html5Mode(true)
    $routeProvider.otherwise({ redirectTo: '/' })
  })
  .run(ngMeta => {
    ngMeta.init()
  })
  .name

bootstrap(document, [app])

