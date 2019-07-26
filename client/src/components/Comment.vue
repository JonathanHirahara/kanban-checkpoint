<template>
  <div class="container comments border border-dark">
    <div class="row justify-content-center">
      <div class="col-6 border border-dark">
        <h5 class="border border-dark">{{commentData.content}}</h5>
        <p class="border border-dark">{{commentData.author}}</p>
      </div>
      <div class="col-4 border-border-dark">
        <button class="btn btn-warning border-border-dark btn-sm" @click.prevent="deleteComment">Del</button>
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