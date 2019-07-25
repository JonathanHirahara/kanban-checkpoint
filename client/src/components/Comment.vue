<template>
  <div class="comments">
    <div class="row justify-content-center">
      <div class="col-3">
        <h6>{{commentData.content}}</h6>
        <p>{{commentData.author}}</p>
      </div>
      <div class="col-3">
        <button class="btn btn-outline-dark" @click.prevent="deleteComment">DEL</button>
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