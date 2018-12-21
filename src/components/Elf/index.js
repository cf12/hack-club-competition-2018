import React from 'react'

import './index.scss'

class Elf extends React.Component {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      hover: false
    }

  }

  handleClick (e) {
    e.preventDefault()
  }

  render () {
    return (
      <div className='elf fb-row'>
        <img
          src={require('../../assets/images/elf.svg')}
          className='elf__image'
          alt='elf'
          onClick={this.handleClick} />
        <div className='elf__popup'>p</div>
      </div>
    )
  }
}

export default Elf
