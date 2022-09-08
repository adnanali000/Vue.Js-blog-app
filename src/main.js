import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Routes from './routes'
import VueResource from 'vue-resource'
import blogData from './data'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)

//routes instance
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

//Custom directives globally
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// })

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'narrow'){
      el.style.maxWidth = "500px"
    }else if (binding.value == 'wide'){
      el.style.maxWidth = "1200px"
    }

    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px'
    }
  }
})


//filters globally

// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase()
// })

// Vue.filter('snippet',function(value){
//   return value.slice(0,100) + "..."
// })

const store = new Vuex.Store({
  state: { 
    bloglist: blogData 
  },
  mutations: {
    setBloglist: (state,payload) => state.bloglist.push(payload)  ,
    DELETE_BLOG: (state,id) => {
      let newlist = state.bloglist.filter(x => x.id !== id)
      state.bloglist = newlist
    }
  },
  actions:{
    setBlog(context,payload){
      context.state.bloglist.push(payload)
      console.log('payload',context.state.bloglist)



    }
  },
  getters: {
    bloglist: (state) => state.bloglist
  },
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
})
