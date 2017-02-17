import { module, bootstrap } from 'angular'
import * as ngRoute from 'angular-route'
import 'ng-meta'
import routes from './routes'
import { AppComponent } from './app.component'

import './app.component.css'

export const app = module('app', [
    ngRoute,
    'ngMeta',
    ...routes
  ])
  .component('appRoot', AppComponent)
  .config($routeProvider => {
    $routeProvider.otherwise({ redirectTo: '/' })
  })
  .run(ngMeta => {
    ngMeta.init()
  })
  .name

bootstrap(document, [app])

