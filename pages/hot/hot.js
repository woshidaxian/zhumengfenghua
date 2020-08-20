// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon1:'http://www.isgang.top/weixin/gou.png',
    icon2:'',
    icon3:'',
    nowNum:1,
    icon4:'http://www.isgang.top/weixin/gou.png',
    isAgree:1,
    activeNone1:'fixedBox-none',   //期望提升
    activeNone2:'fixedBox-none',   //投放时长
    btnActive_hudong:'btnactive',
    btnActive_fans:'',
    btnActive_six:'btnactive',  //六小时
    btnActive_twelve:'',        //12小时
    btnActive_twentyFour:'',    //24小时
    nowTime:'6',
    hudong_type:'互动量',
    activeNone0:'fixedBox-none',
    timeLong:'6小时'
  },
  btn_radio_1:function(){
    this.setData({
      icon1: 'http://www.isgang.top/weixin/gou.png',
      icon2: '',
      icon3: '',
      nowNum:1
    })
  },
  btn_radio_2: function () {
    this.setData({
      icon1: '',
      icon2: 'http://www.isgang.top/weixin/gou.png',
      icon3: '',
      nowNum:2
    })
  },
  btn_radio_3: function () {
    this.setData({
      icon1: '',
      icon2: '',
      icon3: 'http://www.isgang.top/weixin/gou.png',
      nowNum:3
    })
  },
  btn_radio_agree:function(){
    if(this.data.isAgree){
      this.setData({
        icon4:'',
        isAgree:0
      })
    }else{
      this.setData({
        icon4: 'http://www.isgang.top/weixin/gou.png',
        isAgree: 1
      })
    }
  },

  
  hudongliang:function(){
    this.setData({
      btnActive_hudong:'btnactive',
      btnActive_fans:''
    })
  },
  fans:function(){
    this.setData({
      btnActive_hudong: '',
      btnActive_fans: 'btnactive'
    })
  },


  btn_type:function(){
    this.setData({
      activeNone0:'',
      activeNone2:''
    })
  },
  btn_long:function(){
    this.setData({
      activeNone0: '',
      activeNone1: ''
    })
  },
  // 期望提升   完成
  complete_type:function(){
    if (this.data.btnActive_hudong =='btnactive'){
      this.setData({
        hudong_type: '互动量',
        activeNone2:'fixedBox-none',
        activeNone0:'fixedBox-none'
      })
    } else if (this.data.btnActive_fans == 'btnactive'){
      this.setData({
        hudong_type: '粉丝增长',
        activeNone2: 'fixedBox-none',
        activeNone0: 'fixedBox-none'
      })
    }
  },
  // 期望提升   取消
  cancel_type:function(){
    this.setData({
      activeNone2: 'fixedBox-none',
      activeNone0: 'fixedBox-none'
    })
  },
  //投放时长  取消
  cancel_time:function(){
    this.setData({
      activeNone0:'fixedBox-none',
      activeNone1:'fixedBox-none'
    })
  },
  // 投放时长    完成
  complete_time:function(){
    if(this.data.btnActive_six=='btnactive'){
      this.setData({
        timeLong:'6小时',
        nowTime:6,
        activeNone0:'fixedBox-none',
        activeNone1:'fixedBox-none'
      })
    }else if(this.data.btnActive_twelve=='btnactive'){
      this.setData({
        timeLong: '12小时',
        nowTime: 12,
        activeNone0: 'fixedBox-none',
        activeNone1: 'fixedBox-none'
      })
    }else if(this.data.btnActive_twentyFour=='btnactive'){
      this.setData({
        timeLong: '24小时',
        nowTime: 24,
        activeNone0: 'fixedBox-none',
        activeNone1: 'fixedBox-none'
      })
    }
  },
  // 六小时
  sixHours:function(){
    this.setData({
      btnActive_six:'btnactive',
      btnActive_twelve:'',
      btnActive_twentyFour:''
    })
  },
  twelveHours:function(){
    this.setData({
      btnActive_six: '',
      btnActive_twelve: 'btnactive',
      btnActive_twentyFour: ''
    })
  },
  twentyFourHours:function(){
    this.setData({
      btnActive_six: '',
      btnActive_twelve: '',
      btnActive_twentyFour: 'btnactive'
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