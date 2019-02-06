// component/index/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrl:String,
    imgTitle:String,
    imgTi:String
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
    onmore(e){
      var title=e.currentTarget.dataset.title 
      var ti=e.currentTarget.dataset.ti 
      wx.navigateTo({
        url: "/pages/more/more?title="+title+"&ti="+ti,
      })
    }
  }
})
