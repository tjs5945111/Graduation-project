// pages/addressAdd/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['湖北省', '武汉市', '江岸区'],
    customItem: '全部',
    name:'',
    mobile:'',
    detailed:'',
    addressIs:true,
    _id:null
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindKeyName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindKeyMobile: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  bindKeyDetailed: function (e) {
    this.setData({
      detailed: e.detail.value
    })
  },
  submitFun: function () {
    var addlist={
      name: this.data.name,
      mobile: this.data.mobile,
      detailed: this.data.detailed,
      city: this.data.region,
      _id:3
}
wx.setStorageSync('addlist', {addlist});
  wx.navigateTo({
    url: '/pages/addressList/index'
  }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})