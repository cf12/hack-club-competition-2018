import React from 'react'

import './index.scss'

class Elf extends React.Component {
  render () {
    return (
      <div className='elf fb-row'>
        <img
          src={require('../../assets/images/elf.svg')}
          className='elf__image'
          alt='elf'
          onClick={this.handleClick} />

          <div className='elf__popup'>
            <p className='elf__popup__title'>SUbScRibE tO PewDiePie</p>
            <div
              className='g-ytsubscribe'
              data-channel="pewdiepie"
              data-layout="default"
              data-theme="dark"
              data-count="default" />
          </div>
      </div>
    )
  }
}

export default Elf
