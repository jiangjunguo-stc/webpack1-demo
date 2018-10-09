import React, { Component } from 'react'

class WrapComp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { desc = 'xxxx' } = this.props

    return (
      <div>
        这个是内涵组件{desc}
      </div>
    )
  }
}

module.exports = WrapComp