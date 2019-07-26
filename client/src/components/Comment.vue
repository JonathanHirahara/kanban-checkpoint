<template>
  <div class=" comments mt-2">
    <div class="row justify-content-center">
      <div class="col-12 ">
        <h5 class="">{{commentData.content}}:</h5>
        <p class="text-dark">{{commentData.author}}:</p>
      </div>
      <div class="col-12 border-border-dark">
        <button class="delbutt btn btn-danger text-dark btn-sm btn-block border border-light mt-2"
          @click="deleteComment">Delete
          Comment</button>
      </div>
    </div>


  </div>
</template>


<script>
  export default {
    name: 'Comments',
    props: ['commentData'],
    data() {
      return {}
    },
    computed: {
      comments() {
        return this.$store.state.comments
      }
    },
    methods: {
      deleteComment() {
        this.$store.dispatch('deleteComment', this.commentData)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>