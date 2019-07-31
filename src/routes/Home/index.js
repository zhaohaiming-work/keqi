import React from 'react'
import './home.scss'
class App extends React.Component {
  log = () => {
    console.log('不要点我')
  }
  render () {
    return (
      <React.Fragment>
        <div>
          你可以正常使用了
        </div>
        <button onClick={this.log}>
          点我
        </button>
      </React.Fragment>
    )
  }
}

export default App
