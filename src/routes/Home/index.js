import React from 'react'
import './home.scss'
import { history } from 'func'
class App extends React.Component {
  constructor (props) {
    super(props)
    history.push('/index')
    // history.push('/examples')
  }

  log = () => {
    console.log('不要点我')
  }
  render () {
    return (
      <React.Fragment>
        {/* <div>
          你可以正常使用了
        </div>
        <button onClick={this.log}>
          点我
        </button> */}
      </React.Fragment>
    )
  }
}

export default App
