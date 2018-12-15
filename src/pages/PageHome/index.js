import React from 'react'

import {
  BackgroundSnow,
  Present,
  Footer
} from '../../components'

import './index.scss'

class PageHome extends React.Component {
  render () {
    return (
      <div className='page-home fb-ccol'>

        <h1 className='page-home__title'>
          Need help finding a gift for your friend?
        </h1>
        <p className='page-home__subtitle'>
          No worries - just click on the present below.
        </p>
        <Present />

        <div className='page-home__background'>
          <BackgroundSnow />
          <div className='page-home__background__scenery' />
        </div>
        <Footer />
      </div>
    )
  }
}

export default PageHome
