import React from 'react'
import PropTypes from 'prop-types'
import { List, InputItem, Toast, Button, WhiteSpace, WingBlank } from 'antd-mobile'
// import { createForm } from 'rc-form'
// import login from 'img/login'
import { history } from 'func'
import api from 'api'

import '../style'
class App extends React.Component {
  state={
    user:'',
    password:''
  }
  componentDidMount () {
    // this.autoFocusInst.focus();
  }
  log = () => {
    console.log('不要点我')
  }
  change_1 = (values) => {
    console.log(values)
    this.setState({
      user:values
    })
  }
  change_2 = (values) => {
    console.log(values)
    this.setState({
      password:values
    })
  }
  reg = () => {
    const { user, password } = this.state
    if (user === '' || password === '') {
      Toast.info('请填写完信息！')
      return
    }
    api.register({
      user,
      password,
    }).then(res => {
      Toast.success('注册成功')
      this.setState({
        user: '',
        password: '',
      })
      history.push('/index')
    }).catch(res => {
      Toast.fail('登陆失败')
    })
  }
  render () {
    // const { user, password } = this.state
    return (
      <React.Fragment>
        <WingBlank>
          <div className='bglogin'>
            <div />
            <div>用户登录</div>
          </div>
          <List style={{ marginBottom:'20px' }}>
            <InputItem
              placeholder='账号'
              onChange={this.change_1}
              // value={user}
            ><i className='iconfont f1'>&#xe607;</i></InputItem>
            <InputItem
              type='password'
              placeholder='密码'
              onChange={this.change_2}
              // value={password}
            ><i className='iconfont f2'>&#xe610;</i></InputItem>
          </List>
          <Button type='primary' onClick={this.reg}>登录</Button><WhiteSpace />
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
