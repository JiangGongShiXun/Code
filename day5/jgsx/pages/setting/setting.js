// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  // M
  data: {
    song_list: [],
    offset: 0
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
    this.getSongInfo()
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
    this.getSongInfo()
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

  },

  getSongInfo() {
    var that = this;
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting', // 仅为示例，并非真实的接口地址
      data: {
        method: "baidu.ting.billboard.billList",
        type: 22,
        size: 10,
        offset: that.data.offset
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          song_list: res.data.song_list.concat(that.data.song_list),
          offset: ++that.data.offset
        })
        wx.stopPullDownRefresh();
      }
    })
  }
})