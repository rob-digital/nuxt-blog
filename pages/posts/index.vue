<template>
  <div class="post-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
// import  PostList from '@/components/Posts/PostList' -> this is a global component registered in 'plugins'

  export default {
    // components: {
    //   PostList
    // },

    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    }
  }
</script>

<style scoped>
  .post-page{
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
