// component/index/item/index.js
import {AllListcModel} from "../../../httpmode/ListMode";
const allListcModel  = new AllListcModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataitem:Object,
  },

  /**
   * 组件的初始数据
   */
  data() {
    phone:[]
},

  /**
   * 组件的方法列表
   */
  methods: {
    ondetails(e){
      var id=e.currentTarget.dataset.id;      
      var title=e.currentTarget.dataset.title;      
      wx.navigateTo({
        url: `/pages/details/details?id=${id}&title=${title}`,
      })
    },
    onshop(e){
      var id=e.currentTarget.dataset.id;   
      allListcModel.getShopAdd(id);  
      wx.showToast({
      title:"添加购物车成功",
      content:"none"
    })
    },
 
  }
})
