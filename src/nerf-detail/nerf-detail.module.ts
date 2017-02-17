import { module } from 'angular'

import { NerfDetailComponent } from './nerf-detail.component'
import { NerfDetailService } from './nerf-detail.service'

export const NerfDetailModule = module('app.nerfDetail', [])
  .service('NerfDetailService', NerfDetailService)
  .component('nerfDetail', NerfDetailComponent)
  .config($routeProvider => {
    $routeProvider.when('/nerf-detail/:id', {
      template: '<nerf-detail id="$resolve.id" detail="$resolve.detail"></nerf-detail>',

      resolve: {
        id: ($route) => $route.current.params.id,
        detail: ($route, NerfDetailService: NerfDetailService) => NerfDetailService.getNerfDetail($route.current.params.id)
      }
    })
  })
  .name
