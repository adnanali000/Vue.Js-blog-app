<template>
  <div class="add-blog">
    <h2 class="text-xl text-red">Add a New Blog Post</h2>
    <form v-if="!submitted"> 
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.body"></textarea>
      <!-- <div id="checkbox">
        <label>Entertainment</label>
        <input type="checkbox" value="entertainment" @input="changeCat($event.target)" />
        <label>Job</label>
        <input type="checkbox" value="job" @input="changeCat($event.target)" />
        <label>Sports</label>
        <input type="checkbox" value="sports" @input="changeCat($event.target)" />
      </div> -->

      <div id="checkbox">
        <label>Entertainment</label>
        <input type="checkbox" value="entertainment" v-model="blog.categories" />
        <label>Job</label>
        <input type="checkbox" value="job" v-model="blog.categories" />
        <label>Sports</label>
        <input type="checkbox" value="sports" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="(author,i) of authors" :key="i">{{author}}</option>
      </select>
      <br><br>
      <button @click.prevent="handleSubmit">Add Blog</button>
      <!-- <button @click.prevent="post">Add Blog</button> -->
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="(category,i) of blog.categories" :key="i">
          {{category}}
        </li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>

  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";

export default {
  data() {
    return {
      blog: {
        title: "",
        body: "",
        categories: [],
        author: "",
        id: ''
      },
      authors: ['The Net Ninja','The Angular Avenger','The Vue Vindicator'],
      submitted: false
    };
  },
  methods:{
    ...mapActions(['setBlog']),
    handleSubmit: function(){
      this.blog.id = this.datalen + 1
      this.setBlog(this.blog)
      this.submitted = true
    },

    changeCat: function(e){
      // console.log(e.value,e.checked)
      if(e.checked){
        this.blog.categories.push(e.value)
      }else{
        let val = this.blog.categories.indexOf(e.value);
        if(val !== -1){
          this.blog.categories.splice(val,1)
        }
      } 
    },

    //post requests
    post: function(){
      this.$http.post("https://jsonplaceholder.typicode.com/posts",{
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data){
        console.log(data)
        this.submitted = true
      })
    }
  },
  computed: {
    ...mapGetters(['bloglist']),
    datalen: function(){
      return this.bloglist.length
    }

  },
  // mounted: function() {
  //   this.blog.id = this.bloglist.length + 1
  // }
};
</script>

<style>

.add-blog {
  margin: 0 auto;
  max-width: 500px;
  padding: 50px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 80%;
  padding: 10px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkbox {
  display: flex;
  margin-right: 10px;
  align-items: center;
  margin-left: 5px;
}
</style>
