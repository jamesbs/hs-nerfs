import { NerfDetailService } from './nerf-detail.service'

export const NerfDetailComponent = {
  templateUrl: require('./nerf-detail.component.html'),

  bindings: {
    id: '<',
    detail: '<',
    delay: '<',
    meta: '<',
  },

  controller: function(ngMeta, NerfDetailService: NerfDetailService) {
    const delay = (this.delay || 0) * 1000

    NerfDetailService.getNerfDetail(this.id)
      .then(nerfDetail => new Promise(resolve => {
        setTimeout(() => resolve(nerfDetail), delay)
      }))
      .then((nerfDetail: any) => {
        const title = delay
          ? `show after ${delay}ms ${nerfDetail.title}`
          : nerfDetail.title

        const description = delay
          ? `show after ${delay}ms ${nerfDetail.description}`
          : nerfDetail.description

        if(!this.meta) {
          ngMeta.setTitle(title)
          ngMeta.setTag('description', description)
        }
      })
  }
}
