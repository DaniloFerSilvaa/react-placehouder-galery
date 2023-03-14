import { useRoutes } from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import { Photo} from '../pages/photo'
import {Galery} from '../pages/galery'
import {Album} from '../pages/album'

export const MainRoutes = () => {
     
     return useRoutes([
          {path: '/', element: < Galery/>},
          {path: '/album/:slug', element: < Album/>},
          {path: '/photo/:slug', element: < Photo/>},
          {path: '*', element: < NotFound/>}
     ])
}