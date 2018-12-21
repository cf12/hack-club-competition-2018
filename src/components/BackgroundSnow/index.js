import React from 'react'

const fps = 60
const ttl = 30 * 60

const styles = {
  position: 'absolute',
  margin: 0,
  width: '100%',
  height: '100%'
}

class Flake {
  constructor (width) {
    this.radius = Math.random() * 3 + 2
    this.opacity = Math.random() * 0.5 + 0.5
    this.wiggle = Math.random() * 20 + 20
    this.life = 0

    // Padded by 200px to gen enough snow for parallax
    this.xorig = (Math.random() * (width + 600)) - 300
    this.x = this.xorig
    this.y = Math.random() * 100 - 100
    this.xvel = 0.2
    this.yvel = Math.random() * 0.5 + 0.4

    if (Math.random() >= 0.5) {
      this.xvel *= -1
    }
  }

  draw (ctx, x) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.closePath()

    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
    ctx.fill()

    if (Math.abs(this.xorig - (this.x + this.xvel)) >= this.wiggle) {
      this.xvel *= -1
    }

    this.x += x * 0.0005 + this.xvel
    this.y += this.yvel
    this.life++
  }
}

class BackgroundSnow extends React.Component {
  constructor () {
    super()

    this.canvas = React.createRef()

    this.draw = this.draw.bind(this)
    this.addFlakes = this.addFlakes.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.updateMouseLocation = this.updateMouseLocation.bind(this)

    this.flakes = []

    this.state = {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0
    }
  }

  updateMouseLocation (e) {
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY
    })
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

    for (let i = 0; i < this.flakes.length; i++) {
      const flake = this.flakes[i]

      if (flake.life >= ttl) {
        this.flakes.splice(i, 1)
      }

      const calculatedX = this.state.mouseX - (this.state.width / 2)

      flake.draw(ctx, calculatedX)
    }
  }

  addFlakes () {
    if (this.flakes.length > 1000) return

    for (let i = 0; i < 30; i++) {
      const flake = new Flake(this.state.width)
      this.flakes.push(flake)
    }
  }

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('mousemove', this.updateMouseLocation)

    setInterval(() => {
      this.draw(this.canvas.current)
    }, 1000 / fps)
    setInterval(this.addFlakes, 1500)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  render () {
    return <canvas
      ref={this.canvas}
      style={styles}
      width={this.state.width}
      height={this.state.height} />
  }
}

export default BackgroundSnow
