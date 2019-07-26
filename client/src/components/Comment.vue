<template>
  <div class=" comments border border-dark">
    <div class="row justify-content-center">
      <div class="col-12 border border-dark">
        <h5 class="border border-dark">{{commentData.content}}:</h5>
        <p class="border border-dark">{{commentData.author}}:</p>
      </div>
      <div class="col-12 border-border-dark">
        <button class="btn btn-danger text-dark btn-sm btn-block border border-light" @click="deleteComment">Delete
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