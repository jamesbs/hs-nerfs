import { NerfDetailService } from './nerf-detail.service'

export const NerfDetailComponent = {
  templateUrl: require('./nerf-detail.component.html'),

  bindings: {
    id: '<',
    detail: '<',
  },

  controller: ($routeParams, ngMeta, NerfDetailService: NerfDetailService) => {

    NerfDetailService.getNerfDetail($routeParams.id)
      .then(nerfDetail => {
        ngMeta.setTitle(nerfDetail.title)
        ngMeta.setTag('description', nerfDetail.description)
      })
  }
}
