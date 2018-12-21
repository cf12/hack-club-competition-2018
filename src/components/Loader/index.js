import React from 'react'

import './index.scss'

class Loader extends React.Component {
  constructor () {
    super()

    this.state = {
      mounted: true,
      fading: false
    }

    setTimeout(() => {
      setTimeout(() => {
        this.setState({
          mounted: false,
          fading: false
        })
      }, 1000)

      this.setState({
        fading: true
      })
    }, 2000)
  }

  render () {
    if (!this.state.mounted) {
      return null
    }

    return (
      <div className={'loader fb-ccol ' + (this.state.fading ? 'loader--fading' : '')}>
        <img
          src={require('../../assets/images/sleigh.svg')}
          className='loader__symbol' />
        <h1 className='loader__title'>LOADING...</h1>
      </div>
    )
  }
}

export default Loader
