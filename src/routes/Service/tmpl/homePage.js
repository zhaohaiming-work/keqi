import React from 'react'
// import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Grid } from 'antd-mobile'
import '../style'
import datas from './data'
// @inject('example')
// @observer
class App extends React.Component {
  static propTypes = {
    // example: PropTypes.object
  }
  componentDidMount () {
    console.log(this.props)
    // this.props.example.getDate()
  }
  render () {
    // const { todos, count } = this.props.example
    return (
      <div>
        <div className='sub-title'><div />主要服务</div>
        <Grid data={datas}
          hasLine={false}
          columnNum={2}
          renderItem={dataItem => (
            <div style={{ margin: '0 12.5px 0', border:'1px solid rgba(221,221,221,1)', paddingBottom:'10px', height: '100%' }}>
              <img src={dataItem.icon} style={{ width: '100%', height: '80%' }} alt='' />
              <div className='textHide'>
                <span >{dataItem.text}</span>
              </div>
            </div>
          )}
        />
      </div>
    )
  }
}
export default App
