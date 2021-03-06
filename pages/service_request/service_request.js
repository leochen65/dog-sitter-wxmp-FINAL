// pages/service_request/service_request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    first_name: '',
    last_name: '',
    address: '',
    bio: '',
    id: '',
    categories: '',
    price: '',
    sitter: [],
    user: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page = this;
    const sitterId = wx.getStorageSync('sitter_id')
    // const sitterId = options.id; 
    console.log("hey",sitterId)
    const userId = wx.getStorageSync('user_id');
    wx.request({
      url: `https://dog-sitter-woof.herokuapp.com/api/v1/users/${userId}`,
      method: 'GET',
      success: function (res) {
        const currentUser = res.data.user;
        page.setData({
          'user': currentUser
        })
      }
    })
    wx.request({
      url: `https://dog-sitter-woof.herokuapp.com/api/v1/users/${sitterId}`,
      method: 'GET',
      success: function (res) {
        console.log(33, res)
        const currentSitter = res.data.user;
        // const first_name = res.data.user.first_name;
        // const last_name = res.data.user.last_name;
        // const language = res.data.user.language;
        // const address = res.data.user.address;
        // const bio = res.data.user.bio;
        // const image_url = res.data.user.image_url
        // const categories = res.data.user.services[0].categories
        // const price = res.data.user.price
        page.setData({
          'sitter': currentSitter
          // id: options.id,
          // first_name: first_name,
          // last_name: last_name,
          // address: address,
          // bio: bio,
          // image_url: image_url,
          // categories: categories,
          // price: price
        })
      }
    });
  },

  buttonClickedConfirm: function () {
    const page = this;
    let p = new Promise((resolve, reject) => {
      wx.reLaunch({
        url: '../service_acceptance_await/service_acceptance_await?id=' + page.data.id,
      })
      resolve()
      console.log(page.data.id)
    })
    p.then(function () {
      wx.showToast({
        title: 'Accepted',
        duration: 1500,
      })
    })
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