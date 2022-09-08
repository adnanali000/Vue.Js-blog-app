import {mapGetters} from 'vuex'

export default {
  computed: {
      ...mapGetters(['bloglist']),
        filteredBlogs: function() {
            return this.bloglist.filter(blog => {
              return blog.title.match(this.search);
            });
          }
    }
}