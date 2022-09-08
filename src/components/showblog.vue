<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <div class="head">
      <h1>All Blogs Articles</h1>
      <input type="text" v-model="search" placeholder="Search blog..." />
    </div>
    <div class="single-blog" v-for="(blog,i) of filteredBlogs" :key="i">
      <router-link :to="'/show/'+ blog.id">
        <h2 v-rainbow>{{ blog.title}}</h2>
      </router-link>
      <article>{{ blog.body  }}</article>
    </div>
  </div>
</template>

<script>

import searchMixin from '../mixins/search' 


export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },

  methods: {},

  computed: {
  
  },

  mounted() {
    // this.$http
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then(function(data) {
    //      this.blogs = data.body.slice(0, 10);
    //   });
    
  },

  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },

  mixins:[searchMixin]
};

</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 50px;
}
.single-blog {
  margin: 20px 0;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  cursor: pointer;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.head input {
  width: 150px;
  padding: 8px;
  outline: none;
}
</style>
