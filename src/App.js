import React, { Component } from 'react';
import './App.css';
const throttle = require('lodash.throttle')
const WHEEL_BOTTOM_DISTANCE = 100
const WHEEL_IMG_WIDTH = 1422


class App extends Component {
  constructor() {
    super()
    this.wheel = React.createRef()
    this.outline = React.createRef()
  }
  componentDidMount () {
    window.onresize = throttle(() => {
      this.updateWheelPosition()
    }, 16)
    this.updateWheelPosition()
    this.wheel.current.onload = () => this.updateWheelPosition()
  }

  render() {
    const wheel = <img
      className={`wheel`}
      ref={this.wheel}
      src="/bg.png"
      alt="navigation wheel"
    />

    const outline = <img
      className="outline"
      ref={this.outline}
      src="/outline.png"
      alt="wheel outline"
    />

    return (
      <div className="App">
        {wheel}
        {outline}
      </div>
    );
  }

  updateWheelPosition () {
    const outline = this.outline.current
    const wheel = this.wheel.current
    const wheelHeight = wheel.height
    const wheelWidth = wheel.width
    wheel.style.bottom = outline.style.bottom = `-${(wheelHeight / 2) + (wheelWidth / WHEEL_IMG_WIDTH * WHEEL_BOTTOM_DISTANCE)}px`
  }


}

export default App;
