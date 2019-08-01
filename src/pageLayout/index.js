import React from 'react'
import PropTypes from 'prop-types'
// import './page-layout'

import { Drawer, List } from 'antd-mobile'
import Header from './headers'

import './page-layout.scss'
class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }
  state = {
    open: true,
  }
  onOpenChange = (...args) => {
    console.log(args)
    this.setState({ open: !this.state.open })
  }

  render () {
    const { children } = this.props
    let arr = ['新闻中心', '服务项目', '主要服务']
    const sidebar = (<List>
      {[0, 1, 2].map((i, index) => {
        return (<List.Item key={index}
          thumb='https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'
        >{arr[index]}</List.Item>)
      })}
    </List>)
    return (
      <React.Fragment>
        {/* <div className='page-layout'>{children}</div> */}
        {/* <NavBar icon={<Icon type='ellipsis' />} onLeftClick={this.onOpenChange}>Basic</NavBar> */}
        <Header />
        {this.state.open && <div className='navBar' >
          <span>网站首页</span>
          <span onClick={this.onOpenChange}>X</span>
        </div>}
        <Drawer
          className='my-drawer'
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={sidebar}
          open={this.state.open}
        >
          {children}
        </Drawer>
      </React.Fragment>
    )
  }
}

export default App
