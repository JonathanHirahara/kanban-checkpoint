<template>
  <div class="commentForm">
    <div class="row">
      <form class="col-12 m-1" @submit.prevent="createComment">
        <label for="comment">Enter Comment:</label>
        <input class="text-light bg-dark" type="comment" name="comment" id="task" placeholder="Enter comment"
          v-model="newComment.content">
        <label for="author">Author</label>
        <input class="text-light bg-dark" type="text" name="author" id="author" placeholder="Your Name"
          v-model="newComment.author">
        <button class="btn btn-success btn-sm mt-1">Add Comment</button>
      </form>
    </div>


  </div>
</template>


<script>
  export default {
    name: 'commentForm',
    props: ['taskId', 'listId'],
    data() {
      return {
        newComment: {
          boardId: this.$route.params.boardId,
          authorId: this.$store.state.user._id,
          listId: this.listId,
          taskId: this.taskId

        }
      }
    },
    computed: {},
    methods: {
      createComment() {
        this.$store.dispatch('createComment', this.newComment)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>