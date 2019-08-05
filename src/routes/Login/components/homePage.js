import React from 'react'
import PropTypes from 'prop-types'
import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile'
// import { createForm } from 'rc-form'
import login from 'img/login'

import '../style'
class App extends React.Component {
  componentDidMount () {
    // this.autoFocusInst.focus();
  }
  log = () => {
    console.log('不要点我')
  }
  handleClick = () => {
    // this.inputRef.focus()
  }
  render () {
    return (
      <React.Fragment>

        <WingBlank>
          <div className='bglogin'>
            <div />
            <div>用户登录</div>
          </div>
          <List style={{ marginBottom:'20px' }}>
            <InputItem
              // type='text'
              placeholder='账号'
            ><i className='iconfont f1'>&#xe607;</i></InputItem>
            <InputItem
              type='password'
              placeholder='密码'
            ><i className='iconfont f2'>&#xe610;</i></InputItem>
          </List>
          <Button type='primary'>登录</Button><WhiteSpace />
          <div className='register'>
            <div>注册新用户</div>
            <div>忘记密码？</div>
          </div>
        </WingBlank>

      </React.Fragment>
    )
  }
}

export default App
