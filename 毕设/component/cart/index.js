// component/cart/index.js
import {AllListcModel} from "../../httpmode/ListMode";
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
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onRefresh(e){
      var id=e.currentTarget.dataset.id;   
      allListcModel.getShopDelete(id);  
      wx.showToast({
      title:"删除成功",
      icon: 'success',
      duration: 2000
    })
    
      this.triggerEvent("refresh");
    }
  }
})
