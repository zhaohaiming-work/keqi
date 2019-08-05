import React from 'react'
import './page-layout.scss'
// import PropTypes from 'prop-types'
import { NavBar } from 'antd-mobile'
import keqi from './image/keqi'
import { history } from 'func'
class App extends React.Component {
  state = {
    open: true,
  }
  // onOpenChange = (...args) => {
  //   console.log('1')
  //   this.setState({ open: !this.state.open })
  // }
  render () {
    // const { todos, count } = this.props.example
    return (
      <div>
        <NavBar
          mode='light'
          icon={<img src={keqi} className='keqi' />}
          // onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <span key='1' style={{ marginRight: '16px' }} className='am-icon-md' onClick={() => history.push('/login')}>
              <i className='iconfont iconfont1'>&#xe607;</i>
              <div>我的</div>
            </span>,
            <span key='2' style={{ marginRight: '16px' }} className='am-icon-md' onClick={() => this.props.onOpenChanges(this.state.open)}>
              <i className='iconfont iconfont2'>&#xe65c;</i>
            </span>,
          ]}
        />
      </div>
    )
  }
}
export default App
