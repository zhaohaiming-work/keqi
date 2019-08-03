import { lazy } from 'react'
// import mergeRoute from 'components/mergeRoutes'
// const Login = React.lazy(() => import('./components/homePage'))
// const aaa = 888

// export default mergeRoute([
//   {
//     path: '/login',
//     tmpl: Login
//   }
// ])
export default lazy(() => import('./components/homepage'))
