// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData:[
      {
        id:1,
        imgSrc:'http://www.isgang.top/weixin/more1.png',
        name:"用户排名",
        src:'../list/list'
      },
      {
        id:2,
        imgSrc:'http://www.isgang.top/weixin/more2.png',
        name:"店铺排名",
        src:'../sjList/sjList'
      },
      {
        id: 3,
        imgSrc: 'http://www.isgang.top/weixin/more5.png',
        name: "攻略圈",
        src:'../strategy/strategy'
      },
      {
        id: 4,
        imgSrc: 'http://www.isgang.top/weixin/more8.png',
        name: "流量监控"
      },
      {
        id: 5,
        imgSrc: 'http://www.isgang.top/weixin/more9.png',
        name: "隐私设置"
      },
      {
        id: 6,
        imgSrc: 'http://www.isgang.top/weixin/more4.png',
        name: "日历"
      },
      {
        id: 7,
        imgSrc: 'http://www.isgang.top/weixin/more13.png',
        name: "涂鸦板"
      },
      {
        id: 8,
        imgSrc: 'http://www.isgang.top/weixin/more14.png',
        name: "游戏大厅"
      },
      {
        id: 9,
        imgSrc: 'http://www.isgang.top/weixin/more10.png',
        name: "主题变换"
      },
      {
        id: 10,
        imgSrc: 'http://www.isgang.top/weixin/more6.png',
        name: "直播",
        src:'../live/live'
      },
      {
        id: 11,
        imgSrc: 'http://www.isgang.top/weixin/more7.png',
        name: "会员中心"
      }
    ],
    navDataOther:[
      {
        id:1,
        imgSrc:'http://www.isgang.top/weixin/more3.png',
        name:'腾讯视频'
      },
      {
        id:2,
        imgSrc:'http://www.isgang.top/weixin/more11.png',
        name:"网易云音乐"
      },
      {
        id:3,
        imgSrc:'http://www.isgang.top/weixin/more12.png',
        name:"墨迹天气"
      }
    ]
  },
  navBtn:function(e){
    var that = this;
    const index = e.currentTarget.dataset.index
    const src = that.data.navData[index].src;
    wx.navigateTo({
      url: src,
    })
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})