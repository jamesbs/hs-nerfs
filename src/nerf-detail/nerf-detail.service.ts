import { IQService } from 'angular'
import { db } from '../../db'

export class NerfDetailService {
  constructor(private $q: IQService) { }

  getNerfDetail = (day: string) => this.$q.resolve(db[day])

  getNerfs = () => this.$q.resolve(Object.keys(db))
}
