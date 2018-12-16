import React from 'react'

import './index.scss'

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <p>
          Made with ❤️ by CF12 •
          <a
            className='footer__link'
            href='https://github.com/cf12'> GitHub </a>
          •
          <a
            className='footer__link'
            href='https://github.com/cf12/hack-club-competition-2018'> Repo</a>
        </p>
      </div>
    )
  }
}

export default Footer
