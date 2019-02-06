import {
  config
} from "../config";
class HTTP {
  request({
    url,
    method = "GET",
    data = {},
    success
  }) {
    wx.request({
      url: 'http://localhost:8080/market'+url,
      // url: 'http://192.168.22.17:8080/market'+url,
      data,
      method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/json',
      }, // 设置请求的 header
      success: res => {
        const statusCode = res.statusCode.toString();
        if (statusCode.startsWith("2")) {
          if (success) {
            success(res.data);
          }
        } else {
          this._showError();
        }
      },
      fail: err => {
        this._showError();
      }
    })

  }
  _showError() {
    wx.showToast({
      title: '网络错误',
      icon: 'none'
    })
  }
}
export {
  HTTP
}