import React from 'react'

import './styles/flexbox.scss'
import './styles/fonts.scss'

import { PageHome } from './pages'

class App extends React.Component {
  render () {
    return (
      <div>
        <PageHome />
      </div>
    )
  }
}

export default App