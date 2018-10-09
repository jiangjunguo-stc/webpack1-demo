import React, { Component } from 'react'

const Hoc = (WrapComp, { title = '标题' }) => {
  return class SubComp extends Component {
    constructor(props) {
      super(props)
      this.state = {
        desc: '描述信息xxx'
      }
    }

    render() {
      const { desc } = this.state

      return (
        <div>
          <span>高级组件</span>
          <span>{title}</span>
          <WrapComp desc={desc}></WrapComp>
        </div>
      )
    }
  }
}

module.exports = Hoc