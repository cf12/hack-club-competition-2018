import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './index.scss'

class Loader extends React.Component {
  render () {
    return (
      <CSSTransition

      >
        <div className='loader fb-center'>
          <img
            src={require('../../assets/images/santa.svg')}
            className='loader__symbol' />
        </div>
      </CSSTransition>
    )
  }
}

export default Loader
