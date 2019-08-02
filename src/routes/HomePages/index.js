import React from 'react'
import mergeRoute from 'components/mergeRoutes'
const Home = React.lazy(() => import('./tmpl/homePage'))
export default mergeRoute([
  {
    path: '/index',
    tmpl: Home
  },
])
