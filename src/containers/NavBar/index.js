import React from 'react'
import { asyncComponent } from 'react-async-component'
import { loadRoute, errorLoading } from '../../helpers/asyncComponents'

export default asyncComponent({
  resolve: () => System.import('./NavBar').then(loadRoute).catch(errorLoading),
  LoadingComponent: () => <div>Component is Loading</div>,
  ErrorComponent: ({ error }) => <div className='page-error'>{error}</div>
})
