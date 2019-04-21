import Vue from 'vue'
import app from './app.vue'

window.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = '<div id="app"></div>'

  Vue.component('app', app)
  const App = new Vue({
    el: '#app',
    render: function (createElement) {
      return createElement('app')
    }
  })
})
