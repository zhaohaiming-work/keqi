import React from 'react'
import './page-layout.scss'
import PropTypes from 'prop-types'
import { NavBar, Icon } from 'antd-mobile'
class App extends React.Component {
  render () {
    // const { todos, count } = this.props.example
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
            <Icon key='1' type='ellipsis' />,
          ]}
        >NavBar</NavBar>
      </div>
    )
  }
}
export default App
