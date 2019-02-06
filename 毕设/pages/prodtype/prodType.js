import {AllListcModel} from "../../httpmode/ListMode";
import split from "../../utils/split";
var spl=split.splits;
const allListcModel  = new AllListcModel();
Page({
    data:{
        phone:[],
        sortActive:0,
    },
    onLoad(){
        allListcModel.getSearch(this.handledata,"p");
    },
    onsearch(){
      wx.navigateTo({
        url: '/pages/search/search',
      })
    },
    onrearch(e){
      wx.showLoading({
        title:"加载数据"
      });
      this.setData({
        sortActive: e.currentTarget.dataset.id,
      })
      var value=e.currentTarget.dataset.type
      allListcModel.getSearch(this.handledata,value);
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
      if(this.data.phone.length ==0){
        wx.showToast({
          title: '抱歉！商品列表为空。',
          icon: 'none'
        })
      }
      wx.hideLoading();
    },
})