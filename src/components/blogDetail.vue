<template>
    <div class="show-blogs">
      <div class="head">
        <h1>Blog Detail</h1>
      </div>
      <div class="single-blog">
        <h1 v-if="blog.author">Author: {{blog.author}}</h1>
          <h2>Title: {{blog.title}}</h2>        
        <article>Content: {{ blog.body }}</article>
        <h3 v-if="blog.categories">Category: {{blog.categories[0]}}</h3>
      </div>
    </div>
  </template>
  
  <script>

    import { mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog: {},
      };
    },
  
    methods: {

    },

    mounted(){
        // this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
        //     this.blog = data.body
        // })

        this.blog = this.bloglist.find(x => x.id == this.id)
    },
  
    computed: {
      ...mapGetters(['bloglist']),
    },
  
  };

  
  </script>
  
  <style scoped>

  .show-blogs {
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 50px;
    height: 500px;
  }
  .single-blog {
    margin: 20px 0;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
  }
  
  </style>
  