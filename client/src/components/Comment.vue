<template>
  <div class="comments">
    <div>
      <h6>{{commentData.content}}</h6>
      <p>{{commentData.author}}</p>
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

    },
    components: {}
  }
</script>


<style scoped>

</style>