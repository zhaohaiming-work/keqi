import { ajax } from './'
class Xhr {
  // 登录
  register = (postData = {}) => (
    ajax.get('/login', { params: postData })
  )
}

export default new Xhr()
