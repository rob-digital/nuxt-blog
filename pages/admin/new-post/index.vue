<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';
import axios from 'axios'

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    methods: {
     async onSubmitted(postData) {
       try {
           await this.$store.dispatch('addPost', postData)
           await this.$router.push('/admin')

       } catch (error) {
         console.log(error);
       }
      }
    }
  }
</script>

<style lang="scss" scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
