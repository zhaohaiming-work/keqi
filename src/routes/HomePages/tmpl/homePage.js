import React from 'react'
import PropTypes from 'prop-types'
import { Carousel, WingBlank } from 'antd-mobile'
import '../style'
import Service from '../../Service/tmpl/homePage'
// @inject('example')
// @observer
class App extends React.Component {
  static propTypes = {
    // example: PropTypes.object
  }
  state = {
    data: ['1', '2'],
    imgHeight: 176,
  }
  componentDidMount () {
    console.log(this.props)
    // this.props.example.getDate()
    setTimeout(() => {
      this.setState({
        data: [
          {
            'name':'AiyWuByWklrrUDlFignR',
            'urls':'//nwzimg.wezhan.cn/contents/sitefiles2027/10139066/images/6050701.jpg',
          },
          {
            'name':'TekJlZRVCjLFexlOCuWn',
            'urls':'//nwzimg.wezhan.cn/contents/sitefiles2027/10139066/images/6052655.jpg',
          },
        ],
      })
    }, 100)
  }
  render () {
    // const { todos, count } = this.props.example
    return (
      <div>
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            // beforeChange={(from, to) => {}}// console.log(`slide from ${from} to ${to}`)
            // afterChange={index => {}}// console.log('slide to', index)
          >
            {this.state.data.map(
              (val, index) => (
                <a
                  key={val}
                  href='javascript:;'// http://www.alipay.com
                  onClick={() => console.log(index)}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val.urls}
                    alt=''
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'))
                      this.setState({ imgHeight: 'auto' })
                    }}
                  />
                  <div className='pA'>
                    <div>一站式服务平台，您的房屋管家</div>
                    <ul>
                      <li>专业</li>
                      <li>快捷</li>
                      <li>有保障</li>
                      <li>评价</li>
                    </ul>
                  </div>
                </a>
              )
            )}
          </Carousel>
        </WingBlank>
        <Service style={{ marginTop:'10px' }} />
      </div>
    )
  }
}
export default App
