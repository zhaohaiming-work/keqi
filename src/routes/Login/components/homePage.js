import React from 'react'
import PropTypes from 'prop-types'
import { List, InputItem, Toast } from 'antd-mobile'
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
    this.inputRef.focus()
  }
  render () {
    return (
      <React.Fragment>
        <div>{'啦啦啦啦'}</div>
        {/* <List renderHeader={() => 'Customize to focus'}>
          <InputItem

            clear
            placeholder='auto focus'
          >标题</InputItem>
          <InputItem

            clear
            placeholder='click the button below to focus'
          >标题</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick}
            >
              click to focus
            </div>
          </List.Item>
        </List>

        <List renderHeader={() => 'Whether is controlled'}>
          <InputItem
            placeholder='controled input'
          >受控组件</InputItem>
          <InputItem
            defaultValue='Title'
            placeholder='please input content'
            data-seed='logId'
          >非受控组件</InputItem>
        </List>

        <List renderHeader={() => 'Click label to focus input'}>
          <InputItem
            placeholder='click label to focus input'
          ><div onClick={() => this.labelFocusInst.focus()}>标题</div></InputItem>
        </List>

        <List renderHeader={() => 'Show clear'}>
          <InputItem
            clear
            placeholder='displayed clear while typing'
          >标题</InputItem>
        </List>

        <List renderHeader={() => 'Customize the extra content in the right'}>
          <InputItem
            placeholder='0.00'
            extra='¥'
          >价格</InputItem>
        </List>

        <List renderHeader={() => 'Format'}>
          <InputItem
            type='bankCard'
          >银行卡</InputItem>
          <InputItem
            type='phone'
            placeholder='186 1234 1234'
          >手机号码</InputItem>
          <InputItem

            type='password'
            placeholder='****'
          >密码</InputItem>
          <InputItem
            type='number'
            placeholder='click to show number keyboard'
          >数字键盘</InputItem>
          <InputItem
            type='digit'
            placeholder='click to show native number keyboard'
          >数字键盘</InputItem>
        </List>

        <List renderHeader={() => 'Not editable / Disabled'}>
          <InputItem
            value='not editable'
            editable={false}
          >姓名</InputItem>
          <InputItem
            value='style of disabled `InputItem`'
            disabled
          >姓名</InputItem>
        </List> */}
      </React.Fragment>
    )
  }
}

export default App
