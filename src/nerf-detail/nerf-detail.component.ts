import { NerfDetailService } from './nerf-detail.service'

export const NerfDetailComponent = {
  templateUrl: require('./nerf-detail.component.html'),

  bindings: {
    id: '<',
    detail: '<',
    delay: '<'
  },

  controller: function(ngMeta, NerfDetailService: NerfDetailService) {
    console.log('delay is', this.delay)
    const delay = (this.delay || 0) * 1000

    NerfDetailService.getNerfDetail(this.id)
      .then(nerfDetail => new Promise(resolve => {
        setTimeout(() => resolve(nerfDetail), delay)
      }))
      .then((nerfDetail: any) => {
        ngMeta.setTitle(nerfDetail.title)
        ngMeta.setTag('description', nerfDetail.description)
      })
  }
}
