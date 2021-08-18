<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';
import axios from 'axios';


  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },

   async asyncData(context) {
      try {
        const response = await axios.get(process.env.baseUrl + '/posts/' + context.params.postid + '.json' )
         await console.log('context',context);
          await console.log('responseAdmin:', response)

          return {
            loadedPost: {
              ...response.data,
              id: context.params.postid
              }
            }

      } catch (e) {
        console.log(context.e);
      }
    },
    methods: {
     async onSubmitted(editedPost) {
       await this.$store.dispatch('editPost', editedPost)
       console.log('editedPost:', editedPost)
       await this.$router.push('/admin')
      }
    }
  }
</script>


<style lang="scss" scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
