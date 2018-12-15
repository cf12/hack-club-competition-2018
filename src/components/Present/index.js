import React from 'react'

import './index.scss'

class Present extends React.Component {
  render () {
    return (
      <img
        src={require('../../assets/images/gift.svg')}
        className='present'
        alt='present' />
    )
  }
}

export default Present
