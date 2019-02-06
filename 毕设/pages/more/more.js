import {AllListcModel} from "../../httpmode/ListMode";
import split from "../../utils/split";
var spl=split.splits;
const allListcModel  = new AllListcModel();
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortActive:0,
    sortState: true,
    price:false,
    flavor:false,
    mount:false,
    page:1,
    phone:[],
    title:""
  },
    sortFun(data) {
    this.setData({
      sortActive: data.currentTarget.dataset.data,
    })

    if (data.currentTarget.dataset.data == 1){
      this.setData({
        price: this.price = !this.price
      })
    } else if (data.currentTarget.dataset.data == 2){
      this.setData({
        flavor: this.flavor = !this.flavor
      })

    } else if (data.currentTarget.dataset.data == 3) {
      this.setData({
        mount: this.mount = !this.mount
      })

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.showLoading({
      title:"加载数据"
    });
    var title=e.title;
    var ti=e.ti;
    wx.setNavigationBarTitle({
      title
    });
    this.setData({
      title
    })
    if(title=="正在热销"||title=="即将上市"||title=="年度排行榜"){
      allListcModel.getSearchname(this.handledata,ti);
    }else{
      console.log(ti)
      allListcModel.getSearch(this.handledata,ti)
    }
  }, 
  handledata(res){
    var phone = [];
    res.forEach(ele=>{
      var id = ele.id;
      var title = ele.title;
      var price = ele.price;
      var imgUrl = spl(ele.url);
      var temp = {
        id,
        price,
        title,
        imgUrl
      };
      phone.push(temp);
    })
    this.setData({
      phone
    });
    wx.hideLoading();
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