/**
 * Created by CatM on 2017/2/8.
 */
/**
 * Created by CatM on 2016/11/30.
 */
var app=new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})