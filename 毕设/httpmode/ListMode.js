import {
    HTTP
} from "../utils/http";
class AllListcModel extends HTTP {
    //获取全部数据
    getList(callback) {
        this.request({
            url: "/list?state=getAll",
            success: res => {
                // let index = res.index;
                callback(res);
                // wx.setStorageSync('latest', res.index)
            }
        })
    }
    //前3（value可以为0 3 6 ）
    getTop(callback,value,type,ma,maxtitle) {
        this.request({
            url: "/list?state=getTop&"+value,
            success: res => {
                // let index = res.index;
                callback(res,type,ma,maxtitle);
                // wx.setStorageSync('latest', res.index)
            }
        })
    }
    //按type搜索
    getSearch(callback,value) {
        this.request({
            url: `/list?state=search&changes='${value}'`,
            success: res => {
                // let index = res.index;
                callback(res);
                // wx.setStorageSync('latest', res.index)
            }
        })
    }  
    //按id搜索
    getSearchid(callback,value) {
        this.request({
            url: `/list?state=search&id=${value}`,
            success: res => {
                // let index = res.index;
                callback(res);
                // wx.setStorageSync('latest', res.index)
            }
        })
    }  
    //按name搜索
    getSearchname(callback,value) {
        this.request({
            url: `/list?state=search&na="${value}"`,
            success: res => {
                // let index = res.index;
                callback(res);
                // wx.setStorageSync('latest', res.index)
            }
        })
    }  
    //获取购物车全部数据
    getShopList(callback) {
        this.request({
            url: "/shop?state=getSearch",
            success: res => {
                // let index = res.index;
                callback(res);
                // wx.setStorageSync('latest', res.index)
            }
        })
    } 
    //向购物车添加数据
    getShopAdd(id) {
        this.request({
            url: "/shop?state=getAdd&"+id,
        })
    } 
    //从购物车中删除数据
    getShopDelete(id) {
        this.request({
            url: "/shop?state=getDelete&"+id,
        })
    } 
    //通过优惠卷修改数据库
    getShopAlter(price,id) {
        this.request({
            url: "/shop?state=getAlter&"+price+"&"+id,
        })
    } 
}
export {
    AllListcModel
};