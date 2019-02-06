// pages/addressList/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {mobile:15172446666,name:"童建设",city:["湖北省","武汉市","江岸区"],detailed:"湖北大学知行学院",_id:1},
      {mobile:15172446666,name:"童建设",city:["新疆省","喀什市","麦盖提县"],detailed:"农三师四十六团",_id:2}
    ],
    id:1,
    state:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  defaultFun:function(data){
    this.setData({
      id: data.currentTarget.dataset.item._id
    })

  },
  onLoad: function (options) {
   
    // this.setData({
    //   id: app.globalData.userInfo.address._id,
    //   state: options ? options.type:null
    // })
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
    var list=[]
    var addlist = wx.getStorageSync('addlist');
    this.data.list.forEach(ele => {
      list.push(ele)
    });
    if(typeof(addlist)=="object"){
      list.push(addlist.addlist)
      this.setData({
            list
          })
    }
    
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