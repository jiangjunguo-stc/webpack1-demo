require('babel-polyfill')
import Routes from './app'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Routes />,
  document.getElementById('App')
)

// import React from 'react'
// import ReactDOM from 'react-dom'

// class App extends React.Component {
//   render() {
//     return (
//       <p>
//         Little
//       </p>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('App'));