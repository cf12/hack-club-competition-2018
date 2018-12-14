import React from 'react'

const styles = {
  position: 'absolute',
  margin: 0,
  width: '100%',
  height: '100%'
}

class Flake {
  constructor () {
    this.radius = Math.random() * 4 + 2

    this.xorig = Math.random() * 1920
    this.x = this.xorig
    this.xvel = 0.2
    this.y = Math.random() * 100
    this.yvel = Math.random() * 0.5 + 0.3

    if (Math.random() >= 0.5) {
      this.xvel *= -1
    }

    this.wiggle = Math.random() * 20 + 20
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.closePath()

    ctx.fillStyle = 'white'
    ctx.fill()

    if (Math.abs(this.xorig - (this.x + this.xvel)) >= this.wiggle) {
      this.xvel *= -1
    }

    this.x += this.xvel
    this.y += this.yvel
  }
}

class Background extends React.Component {
  constructor () {
    super()

    this.canvas = React.createRef()

    this.draw = this.draw.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)

    this.flakes = []

    for (let i = 0; i < 500; i++) {
      this.flakes.push(new Flake())
    }

    this.state = {
      width: 0,
      height: 0
    }
  }

  componentWillMount () {

  }

  updateWindowDimensions () {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  draw (canvas) {
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const flake of this.flakes) {
      flake.draw(ctx)
    }
  }

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)




    setInterval(() => {
      this.draw(this.canvas.current)
    }, 1000 / 60)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  render () {
    console.log(this.state)

    return <canvas
      ref={this.canvas}
      style={styles}
      width={this.state.width}
      height={this.state.height} />
  }
}

export default Background
