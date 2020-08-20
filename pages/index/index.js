//获取应用实例
const app = getApp()

Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    srcImg1:'http://www.isgang.top/weixin/home1.png',
    srcImg2:'http://www.isgang.top/weixin/de.png',
    srcImg3:'http://www.isgang.top/weixin/play.png',
    srcImg4:'http://www.isgang.top/weixin/info.png',
    srcImg5:'http://www.isgang.top/weixin/people.png'
  },
  ARphoto:function(){
    wx.navigateTo({
      url: '../camera/camera',
    })
  },
  ARdaohang:function(){
    wx.navigateTo({
      url: '../map/map',
    })
  },
  footprint:function(){
    wx.navigateTo({
      url: '../footprint/footprint',
    })
  },
  card:function(){
    wx.navigateTo({
      url: '../card/card',
    })
  },
  more:function(){
    wx.navigateTo({
      url: '../more/more',
    })
  },
  message:function(){
    wx.navigateTo({
      url: '../message/message',
    })
  },
  scan:function(){
    wx.navigateTo({
      url: '../scan/scan',
    })
  }
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
