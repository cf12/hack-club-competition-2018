import React from 'react'

import './index.scss'

import products from '../../assets/products.json'

class Present extends React.Component {
  handleClick (e) {
    e.preventDefault()

    // TODO: Implement category selection
    const categories = Object.keys(products)

    const category = products[categories[categories.length * Math.random() << 0]]
    const item = category[category.length * Math.random() << 0]

    window.open('https://amzn.com/' + item)
  }

  render () {
    return (
      <img
        src={require('../../assets/images/gift.svg')}
        className='present'
        alt='present'
        onClick={this.handleClick.bind(this)} />
    )
  }
}

export default Present
