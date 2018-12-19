import React from 'react'

import {
  BackgroundSnow,
  Present,
  Footer,
  Loader
} from '../../components'

import './index.scss'

class PageHome extends React.Component {
  constructor () {
    super()

    this.state = {
      loading: true
    }
  }

  componentWillMount () {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000)
  }

  render () {
    return (
      <div className='page-home fb-ccol'>
        {
          (this.state.loading)
            ? <Loader />
            : null
        }

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
