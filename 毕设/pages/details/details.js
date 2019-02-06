import {AllListcModel} from "../../httpmode/ListMode";
import split from "../../utils/split";
var spl=split.splits;
const allListcModel  = new AllListcModel();
Page({
  data: {
    img_width_three:60,
    img_width_one:60,
    clubs:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabIs:true,
    specIs:false,
    data:null,
    phone:[]
    },
    
    //触摸开始事件
    touchstart: function (e) {
   
    this.data.touchDot = e.touches[0].pageX;
    var that =this;
    this.data.interval = setInterval(function () {
    that.data.time += 1;
    }, 100);
    },
    //触摸移动事件
    touchmove: function (e) {
    let touchMove = e.touches[0].pageX;
    let touchDot =this.data.touchDot;
    let time =this.data.time;
   
    //向左滑动
    if (touchMove - touchDot <= -40 && !this.data.done) {
      // console.log("向左滑动");
   
    this.data.done =true;
    this.scrollLeft();
    }
    //向右滑动
    if (touchMove - touchDot >=40 && !this.data.done) {
    // console.log("向右滑动");
    this.data.done =true;
    this.scrollRight();
    }
    },
    //触摸结束事件
    touchend: function (e) {
    clearInterval(this.data.interval);
    this.data.time =0;
    this.data.done =false;
    },
    //向左滑动事件
    scrollLeft() {
    var animation1 = wx.createAnimation({
    duration: 300,
    timingFunction: "linear",
    delay: 0
    })
    var animation2 = wx.createAnimation({
    duration: 300,
    timingFunction: "linear",
    delay: 0
    })
    var animation3 = wx.createAnimation({
    duration: 300,
    timingFunction: "linear",
    delay: 0
    })
    this.setData({
    img_width_three: 200
    })
    
    this.animation1 = animation1;
    this.animation2 = animation2;
    this.animation3 = animation3;
    this.animation1.translateX(-60).opacity(0.5).step();
    this.animation2.translateX(-60).opacity(1).scale(0.8,0.8).step();
    this.animation3.translateX(-60).opacity(0.5).scale(1.2,1.2).step();
    
    
    this.setData({
    animation1: animation1.export(),
    animation2: animation2.export(),
    animation3: animation3.export(),
    })
    
    var that =this;
    setTimeout(function () {
    that.animation1.translateX(0).opacity(0.5).step({ duration:0, timingFunction:'linear' });
    that.animation2.translateX(0).opacity(1).scale(1,1).step({ duration:0, timingFunction:'linear' });
    that.animation3.translateX(0).opacity(0.5).scale(1,1).step({ duration:0, timingFunction:'linear' });
    
    that.setData({
    animation1: animation1.export(),
    animation2: animation2.export(),
    animation3: animation3.export(),
    img_width_three: 60
    })
    }.bind(this),300)
    
    let array =this.data.clubs;
    let shift = array.shift();
    array.push(shift);
    
    setTimeout(function () {
    this.setData({
    clubs: array
    })
    }.bind(this),195)
    },
    
    //向右滑动事件
    scrollRight() {
    var animation1 = wx.createAnimation({
    duration: 300,
    timingFunction: "linear",
    delay: 0
    })
    var animation2 = wx.createAnimation({
    duration: 300,
    timingFunction: "linear",
    delay: 0
    })
    var animation3 = wx.createAnimation({
    duration: 300,
    timingFunction: "linear",
    delay: 0
    })
    var animation4 = wx.createAnimation({
    duration: 300,
    timingFunction: "linear",
    delay: 0
    })
    var animation5 = wx.createAnimation({
    duration: 300,
    timingFunction: "linear",
    delay: 0
    })
    this.setData({
    img_width_one: 200
    })
    this.animation1 = animation1;
    this.animation2 = animation2;
    this.animation3 = animation3;
    this.animation1.translateX(60).opacity(0.5).scale(1.2,1.2).step();
    this.animation2.translateX(60).opacity(1).step();
    this.animation3.translateX(60).opacity(0.5).step();
    
    
    this.setData({
    animation1: animation1.export(),
    animation2: animation2.export(),
    animation3: animation3.export(),
    
    })
    
    var that =this;
    setTimeout(function () {
    that.animation1.translateX(0).opacity(0.5).scale(1,1).step({ duration:0, timingFunction:'linear' });
    that.animation2.translateX(0).opacity(1).scale(1,1).step({ duration:0, timingFunction:'linear' });
    that.animation3.translateX(0).opacity(0.5).step({ duration:0, timingFunction:'linear' });
    that.setData({
    animation1: animation1.export(),
    animation2: animation2.export(),
    animation3: animation3.export(),
    img_width_one: 60
    })
    }.bind(this),300)
    
    let array =this.data.clubs;
    let pop = array.pop();
    array.unshift(pop);
    
    setTimeout(function () {
    this.setData({
    clubs: array
    })
    }.bind(this),195)
    },
    
  tabFun(e){
    // console.log(e)
    if (e.currentTarget.dataset.state == 1){
      this.setData({
        tabIs:true
      })
    }else{
      this.setData({
        tabIs: false
      })
    }
  },
  goShopCar: function () {
    wx.reLaunch({
      url: "/pages/cart/cart"
    });
  },
  specFun(){
    this.setData({
      specIs: !this.data.specIs
    })
  },
  addCart(e){
    var id=e.currentTarget.dataset.id;   
    allListcModel.getShopAdd(id);  
    wx.showToast({
    title:"添加购物车成功",
    content:"none"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title:"加载数据"
    });
   var id=options.id
   var title=options.title;
   wx.setNavigationBarTitle({
    title
  });
    allListcModel.getSearchid(this.handledata,id)
  },
  handledata(res,id){
      var phone = [];
      var temp={
        color:spl(res[0].color),
        count:res[0].count,
        details:res[0].details,
        price:res[0].price,
        service:res[0].service,
        style:spl(res[0].style),
        url:spl(res[0].url),
        id:res[0].id,
        title:res[0].title
      }
      phone.push(temp);
      this.setData({
        phone,
        clubs:spl(res[0].url)
      })
    wx.hideLoading();
  },
})