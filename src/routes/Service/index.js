import React from 'react'
import mergeRoute from 'components/mergeRoutes'
const Service = React.lazy(() => import('./tmpl/homePage'))
export default mergeRoute([
  {
    path: '/service',
    tmpl: Service
  },
])
