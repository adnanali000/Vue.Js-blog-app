<template>
  <div v-theme:column="'narrow'" class="show-blogs">
    <div class="head">
      <h1>Admin</h1>
    </div>

    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(blog, i) of bloglist" :key="i">
        <td>{{ blog.id }}</td>
        <td>{{ blog.title }}</td>
        <td>
          <button @click="handleDelete(blog.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import searchMixin from "../mixins/search";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      blogs: [],
    };
},

  methods: {
    handleDelete: function(id){
        this.$store.commit('DELETE_BLOG',id)
    }
  },

  computed: {
      ...mapGetters(['bloglist']),
    },

  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },

  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },

  mixins: [searchMixin]
};
</script>

<style scoped>
.show-blogs {
  max-width: 600px;
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

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #fff;
}
</style>
