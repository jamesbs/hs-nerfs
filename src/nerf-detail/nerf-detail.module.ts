import { module } from 'angular'

import { NerfDetailComponent } from './nerf-detail.component'
import { NerfDetailService } from './nerf-detail.service'

export const NerfDetailModule = module('app.nerfDetail', [])
  .service('NerfDetailService', NerfDetailService)
  .component('nerfDetail', NerfDetailComponent)
  .config($routeProvider => {
    $routeProvider
      .when('/nerf-detail/:id', {
        template: '<nerf-detail id="$resolve.id" detail="$resolve.detail"></nerf-detail>',

        resolve: {
          id: ($route) => $route.current.params.id,
          detail: ($route, NerfDetailService: NerfDetailService) => NerfDetailService.getNerfDetail($route.current.params.id)
        }
      })
      .when('/1s-nerf-detail/:id', {
        template: '<nerf-detail id="$resolve.id" detail="$resolve.detail" delay="1"></nerf-detail>',

        resolve: {
          id: ($route) => $route.current.params.id,
          detail: ($route, NerfDetailService: NerfDetailService) => NerfDetailService.getNerfDetail($route.current.params.id)
        }
      })
      .when('/5s-nerf-detail/:id', {
        template: '<nerf-detail id="$resolve.id" detail="$resolve.detail" delay="5"></nerf-detail>',

        resolve: {
          id: ($route) => $route.current.params.id,
          detail: ($route, NerfDetailService: NerfDetailService) => NerfDetailService.getNerfDetail($route.current.params.id)
        }
      })
      .when('/resolve-nerf-detail/:id', {
        template: '<nerf-detail id="$resolve.id" detail="$resolve.detail"></nerf-detail>',
        resolve: {
          id: ($route) => $route.current.params.id,
          detail: ($route, NerfDetailService: NerfDetailService) => NerfDetailService.getNerfDetail($route.current.params.id),
          data: ($route, ngMeta, NerfDetailService: NerfDetailService) => {
            console.log('route', $route, 'meta', ngMeta, 'nds', NerfDetailService)
            return NerfDetailService.getNerfDetail($route.current.params.id)
              .then(({ title, description }) => {
                // console.log('title', title, 'description', description)
                ngMeta.setTitle(title)
                ngMeta.setTag('description', description)
              })
          }
        },
        meta: {
          disableUpdate: true
        }
      })
  })
  .name
