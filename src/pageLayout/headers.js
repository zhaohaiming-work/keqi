import React from 'react'
import './page-layout.scss'
// import PropTypes from 'prop-types'
import { NavBar, Icon } from 'antd-mobile'
import keqi from './image/keqi'
class App extends React.Component {
  render () {
    // const { todos, count } = this.props.example
    return (
      <div>
        <NavBar
          mode='light'
          icon={<img src={keqi} className='keqi' />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <span style={{ marginRight: '16px' }} className='am-icon-md'>
              <i className='iconfont iconfont1'>&#xe607;</i>
              <div>我的</div>
            </span>,
            <span style={{ marginRight: '16px' }} className='am-icon-md'>
              <i className='iconfont iconfont2'>&#xe65c;</i>
            </span>,
          ]}
        />
      </div>
    )
  }
}
export default App
