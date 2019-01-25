
import {AllListcModel} from "../../httpmode/ListMode";
import split from "../../utils/split";
var spl=split.splits;
const allListcModel  = new AllListcModel();
Page({
  data:{
    img:[
      {imgurl:"/images/app.png",title:"苹果",ti:"p"},
      {imgurl:"/images/hw.png",title:"华为",ti:"h"},
      {imgurl:"/images/xm.png",title:"小米",ti:"x"},
      {imgurl:"/images/vivo.png",title:"vivo",ti:"v"}
  ],
   "hto":{},
   "soon":{},
   "top":{},
  scrollTop: 0 ,
  isScroll:false,
  imglb:[],
  },
  onPullDownRefresh(event){
   this.setData({
    "hto":{},
    "soon":{},
    "top":{},
    imglb:[],
   })
   wx.showLoading({
    title:"加载数据"
  });
  allListcModel.getSearch(res=>{
    var imglb=spl(res[0].url);
    this.setData({
      imglb
    })
  },'l');
  allListcModel.getTop(this.handledata,25,"hto","z","正在热销");
  allListcModel.getTop(this.handledata,28,"soon","j","即将上市");
  allListcModel.getTop(this.handledata,16,"top","n","年度排行榜");
   
 },
  onLoad(){
    wx.showLoading({
      title:"加载数据"
    });
    allListcModel.getSearch(res=>{
      var imglb=spl(res[0].url);
      this.setData({
        imglb
      })
    },'l');
    allListcModel.getTop(this.handledata,25,"hto","z","正在热销");
    allListcModel.getTop(this.handledata,28,"soon","j","即将上市");
    allListcModel.getTop(this.handledata,16,"top","n","年度排行榜");
  },
  handledata(res,type,ma,maxtitle){
    // console.log(res)
    var phone = [];
    if(res!=="null"){
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
    }

//创建一个对象用来根据传入的不同变量来设置对象名和对象里的数据 因为上方的data中存放的是多个对象要使用对象的赋值方法
    var readyData={};
    readyData[type]= {
      phone,
      ma,
      maxtitle
    };
    this.setData(readyData,);
    wx.hideLoading();
  },
  //当用户滚动鼠标时触发的函数
  onPageScroll: function (ev) {
    var _this = this;
    //当滚动的top值最大或者最小时，为什么要做这一步是由于在手机实测小程序的时候会发生滚动条回弹，所以为了解决回弹，设置默认最大最小值   
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    //判断浏览器滚动条上下滚动   
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
       if(ev.scrollTop>160){
   
         this.setData({
           isScroll:true
         })
       }
       } else {
        if(ev.scrollTop<160){
          this.setData({
            isScroll:false
          })
        }  
      }
      //给scrollTop重新赋值    
      setTimeout(function () {
        _this.setData({
          scrollTop: ev.scrollTop
        })
      }, 0)
  },
  ontap(){
    wx.switchTab({
      url:"/pages/prodtype/prodType"
  });
  },
  onsearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },   
  //用户授权
  onGotUserInfo(e){
    if(e.detail.errMsg=="getUserInfo:ok"){
      wx.showToast({
        title: '已授权',
        icon: 'none'
      })
    }
    // console.log(e)
  }
})
