<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import addblogs from './components/addblogs.vue'
import showblog from './components/showblog.vue'
import listblogs from './components/listblogs.vue'
// import listblogs from './components/login.vue'



export default {
  components:{
    'add-blog': addblogs,
    'show-blog':showblog,
    'list-blogs': listblogs
  },
  data () {
    return {
      title: 'My First Vue Project'

    }
  },
  
}
</script>

