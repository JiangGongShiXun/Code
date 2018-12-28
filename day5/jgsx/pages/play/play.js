const date = new Date()
const years = []
var timer = null;
for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}
// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  // M
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    // 歌词
    years,
    lrcArr: [],
    lry: [],
    // 歌词显示
    value: [5],
    // 时间
    time: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.options.id)
    this.getMp3();
    this.getLry();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
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

  },
  audioPlay() {
    var that = this;
    this.audioCtx.play();
    timer = setInterval(function () {
      that.setData({
        time: ++that.data.time,
        value: [that.data.time]
      })
    }, 1000)
  },
  audioPause() {
    this.audioCtx.pause();
    clearInterval(timer);
  },
  audio14() {
    this.audioCtx.seek(14)
  },
  audioStart() {
    this.audioCtx.seek(0)
  },
  getMp3() {
    var that = this;
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting', // 仅为示例，并非真实的接口地址
      data: {
        method: "baidu.ting.song.play",
        songid: that.options.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          poster: res.data.songinfo.pic_big,
          name: res.data.songinfo.title,
          author: res.data.songinfo.author,
          src: res.data.bitrate.show_link,
        })
      }
    })
  },
  getLry() {
    var that = this;
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting', // 仅为示例，并非真实的接口地址
      data: {
        method: "baidu.ting.song.lry",
        songid: that.options.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        //console.log(res.data.lrcContent)
        var lrcArr = that.parseLyric(res.data.lrcContent);
        console.log(lrcArr)
        var lry = [];
        var index = 0;
        for (let l in lrcArr) {
          if (index == 0) {
            lry.push(lrcArr[l])
            index++
          }
          else if (l == index) {
            lry.push(lrcArr[l])
            index++
          } else {
            let offset = l - index
            for (let i = 0; i < offset; i++) {
              lry.push(lrcArr[l])
            }
            index = l
          }
        }
        that.setData({
          lrcArr,
          lry
        })
      }
    })
  },
  parseLyric(lrc) {
    var lyrics = lrc.split("\n");
    var lrcObj = {};
    for (var i = 0; i < lyrics.length; i++) {
      var lyric = decodeURIComponent(lyrics[i]);
      var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
      var timeRegExpArr = lyric.match(timeReg);
      if (!timeRegExpArr) continue;
      var clause = lyric.replace(timeReg, '');
      for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
        var t = timeRegExpArr[k];
        var min = Number(String(t.match(/\[\d*/i)).slice(1)),
          sec = Number(String(t.match(/\:\d*/i)).slice(1));
        var time = min * 60 + sec;
        lrcObj[time] = clause;
      }
    }
    return lrcObj;
  },
  bindChange(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      // month: this.data.months[val[1]],
      // day: this.data.days[val[2]]
    })
  }
})