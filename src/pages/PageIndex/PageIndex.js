import React from 'react'
require('./PageIndex.less')

class PageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="demo">HEllo world</div>
    )
  }
}

module.exports = PageIndex