// pages/cart/cart.js
import {AllListcModel} from "../../httpmode/ListMode";
import split from "../../utils/split";
var spl=split.splits;
const allListcModel  = new AllListcModel();
const app = getApp()
Page({
    data: {
      phone:[],
      isshow:false ,
      total:false, //是否全选
      totalPrice:0, //总价
      list:[],
      isEdit:false
    },
  totalPrice(){//计算总价
    let that = this
    let price = 0
    for(let i=0;i<that.data.list.length;i++){
      if (that.data.list[i].select){
        price = price + that.data.list[i].price * that.data.list[i].num
      }
    }
    this.setData({
      totalPrice: price.toFixed(2)
    })

  },
  totalFun(){ //全选
    this.data.total = !this.data.total
    // for (let i = 0; i < this.data.list.length; i++) {
    //   if (this.data.total) {
    //     this.data.list[i].select = true
    //   }else{
    //     this.data.list[i].select = false
    //   }
    // }
    this.data.list.map((v,k)=>{
      if (this.data.total) {
        v.select = true
      } else {
        v.select = false
      }
    })
    this.setData({
      list: this.data.list,
      total: this.data.total
    })

    this.totalPrice()
  },
  labelFun(e){//单选
    let that = this
    let num = 0
    for (let i = 0; i < that.data.list.length;i++){
      if (that.data.list[i].id == e.currentTarget.dataset.id){
        if (!that.data.list[i].select){
          that.data.list[i].select =  true
        }else{
          that.data.list[i].select = !that.data.list[i].select
        }
        that.setData({
          list: that.data.list
        })
      }

      if (that.data.list[i].select){
        num++
        if (num == that.data.list.length){
          that.setData({
            total: true
          })
        }else{
          that.setData({
            total: false
          })
        }
      }
    }
    this.totalPrice()
  },
  editFun(){ //编辑
    this.setData({
      isEdit: !this.data.isEdit
    })

    if (!this.data.isEdit){
      // console.log(this.data.list)
      // app.http('v1/order/editCart',{list:this.data.list},"POST")
      // .then(res=>{
      //   console.log(res)
      // })
    }
  },
  plusFun(item){ //增加商品数量
    this.data.list.map((v,k)=>{
      if (v.id == item.target.dataset.item.id){
          this.data.list[k].num++
      }
    })

    this.setData({
      list: this.data.list
    })

    this.totalPrice()
  },
  reduceFun(item) { //减少商品数量
    this.data.list.map((v, k) => {
      if (v.id == item.target.dataset.item.id) {
        if (this.data.list[k].num > 1){
          this.data.list[k].num--
        }
      }
    })
    this.setData({
      list: this.data.list
    })

    this.totalPrice()
  },
  delItemFun(item){ //删除单商品
    
    let id = item.target?item.target.dataset.item.id:item.id
console.log(id)
allListcModel.getShopDelete(id);  
wx.showToast({
title:"删除成功",
icon: 'success',
duration: 2000
})
    this.data.list.map((v, k) => {
      if (v.id == id) {
        this.data.list.splice(k,1)
      }
    })

    this.setData({
      list: this.data.list
    })

    this.totalPrice()
  },
  delFun(){ //选中删除
    let list  = []

    this.data.list.map((v, k) => {
      if (!v.select){
        list.push(v)   
      }else if(v.select){
        allListcModel.getShopDelete(v.id);
      }
    })
    wx.showToast({
      title:"删除成功",
      icon: 'success',
      duration: 2000
      })
    this.setData({
      list: list
    })

    this.totalPrice()

  },
  closeFun:function(){
    // let list = []
    // let listTotal = []
    // this.data.list.map((v, k) => {
    //   if (v.select) {
    //     list.push(v)
    //   }else{
    //     listTotal.push(v)
    //   }
    // })
    // app.http('v1/order/set', { goods: list},"POST").then(res=>{
    //   if(res.code == 200){
    //     app.http('v1/order/editCart', { list: listTotal }, "POST")
    //     .then(res => {
    //       console.log(res)
    //     })
    //     wx.navigateTo({
    //       url: "/pages/orderDetails/index?id=" + res.data._id
    //     });
    //   }
    // })
   
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

    onShow(){
    wx.showLoading({
        title:"加载数据"
      });
    allListcModel.getShopList(this.handledata);
    wx.hideLoading();

  },
  handledata(res){
    var list = [];
    res.forEach(ele=>{
      var id = ele.id;
      var title = ele.title;
      var price = ele.price;
      var type = ele.type;
      var color = spl(ele.color);
      var imgUrl = spl(ele.url);
      var temp = {
        type,
        color,
        img:imgUrl[0],
        num:1,
        price:price,
        spec:color[0],
        title:title,
        id:id,
        select:false
      };
      list.push(temp);
    })
    this.setData({
      list: list,
        total:false,
        totalPrice: 0,
    });
    if(this.data.list.length==0){
      this.setData({
        isshow:true 
      })
    }else{
      this.setData({
        isshow:false 
      })
    }
 
  },
  
})
