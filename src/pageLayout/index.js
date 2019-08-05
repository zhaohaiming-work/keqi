import React from 'react'
import PropTypes from 'prop-types'
// import './page-layout'

import { Drawer, List } from 'antd-mobile'
import Header from './headers'

import './page-layout.scss'
import { history } from 'func'

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }
  state = {
    open: false,
  }
  onOpenChange = (...args) => {
    // console.log(args)
    this.setState({ open: !this.state.open })
  }
  routes_s = (a) => {
    console.log(a)
    this.setState({ open: !this.state.open })
    history.push(a)
  }
  render () {
    const { children } = this.props
    let arr = [
      {
        title:'新闻中心',
        URL:'service'
      },
      {
        title:'服务项目',
        URL:'index'
      },
      {
        title:'主要服务',
        URL:'service'
      }
    ]
    const sidebar = (<List>
      {arr.map((item, index) => {
        return (<List.Item key={index} onClick={() => { this.routes_s(`/${item.URL}`) }}>{item.title}</List.Item>)
      })}
    </List>)
    return (
      <React.Fragment>
        {/* <div className='page-layout'>{children}</div> */}
        {/* <NavBar icon={<Icon type='ellipsis' />} onLeftClick={this.onOpenChange}>Basic</NavBar> */}
        {!this.state.open && <Header onOpenChanges={this.onOpenChange} />}
        {this.state.open && <div className='navBar' >
          <span onClick={() => { this.routes_s(`/index`) }}>网站首页</span>
          <span onClick={this.onOpenChange}><i className='iconfont fg'>&#xe635;</i></span>
        </div>}
        <Drawer
          className='my-drawer'
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 0 }}
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
