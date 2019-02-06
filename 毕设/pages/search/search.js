import {AllListcModel} from "../../httpmode/ListMode";
import split from "../../utils/split";
var spl=split.splits;
const allListcModel  = new AllListcModel();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    value:null,
    phone:[]
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  //回车获取输入内容
  onConfirm(e){
    wx.showLoading({
      title:"加载数据"
    });
    var value=e.detail.value;
    // console.log(e.detail.value)
    if(value=="苹果"){
      allListcModel.getSearch(this.handledata,'p');
    }else if(value=="华为"){
      allListcModel.getSearch(this.handledata,'h');
    }else if(value=="小米"){
      allListcModel.getSearch(this.handledata,'x');
    }else if(value=="oppo"){
      allListcModel.getSearch(this.handledata,'o');
    }else if(value=="vivo"){
      allListcModel.getSearch(this.handledata,'v');
    }else{
      this.setData({
        phone:[]
      })
      wx.showToast({
        title: '抱歉！没有找到你想要的，请重新输入。',
        icon: 'none'
      })
    }
  },
  //点击搜索获取输入内容
  onForm(e){
    wx.showLoading({
      title:"加载数据"
    });
    // console.log(e.detail.value.search);
    var value=e.detail.value.search;
    if(value=="苹果"){
      allListcModel.getSearch(this.handledata,'p');
    }else if(value=="华为"){
      allListcModel.getSearch(this.handledata,'h');
    }else if(value=="小米"){
      allListcModel.getSearch(this.handledata,'x');
    }else if(value=="oppo"){
      allListcModel.getSearch(this.handledata,'o');
    }else if(value=="vivo"){
      allListcModel.getSearch(this.handledata,'v');
    }else{
      this.setData({
        phone:[]
      })
      wx.showToast({
        title: '抱歉！没有找到你想要的，请重新输入。',
        icon: 'none'
      })
    }
    
  },
  onrearch(e){
    wx.showLoading({
      title:"加载数据"
    });
    var value=e.currentTarget.dataset.type
    allListcModel.getSearch(this.handledata,value);
  },
  handledata(res){
    var phone = [];
    res.forEach(ele=>{
      var id = ele.id;
      var title = ele.title;
      var ti = ele.ti;
      var price = ele.price;
      var imgUrl = spl(ele.url);
      var temp = {
        id,
        price,
        title,
        ti,
        imgUrl
      };
      phone.push(temp);
    })
    this.setData({
      phone
    });
    wx.hideLoading();
  },
  onFocus(){
    this.setData({
      isShow:true
    })
  },
  onBlur(){
    this.setData({
      isShow:false
    })
  },
  onClick(){
    this.setData({
      value:""
    })
  }
})