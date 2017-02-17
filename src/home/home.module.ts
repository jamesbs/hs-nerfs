import { module } from 'angular'
import { HomeComponent } from './home.component'
import { NerfDetailService } from '../nerf-detail'

export const HomeModule = module('app.home', [])
  .component('home', HomeComponent)
  .config($routeProvider => {
    $routeProvider.when('/', {
      template: '<home nerfs="$resolve.nerfs"></home>',

      resolve: {
        nerfs: (NerfDetailService: NerfDetailService) =>
          NerfDetailService.getNerfs()
      },

      data: {
        meta: {
          'title': 'History of Hearthstone Nerfs',
          'description': 'There have been a lot of nerfs to different cards in the history of hearthstone. Find out this history of the most powerful cards here.'
        }
      }
    })
  })
  .name
