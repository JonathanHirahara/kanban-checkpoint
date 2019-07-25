<template>
  <div class="tasks">

    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{taskData.content}}</li>
      </ul>
      <CommentForm :listId="taskData.listId" :taskId="taskData._id"></CommentForm>
      <button class=" btn btn-danger" @click.prevent="deleteTask">Delete Task</button>
      <Comment v-for="comment in comments" :commentData="comment"></Comment>
    </div>

  </div>
</template>


<script>
  import CommentForm from '@/components/CommentForm'
  import Comment from '@/components/Comment'

  export default {
    name: 'Tasks',
    props: ['taskData'],
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getCommentsByTaskId',
        this.taskData._id)
    },
    computed: {
      tasks() {
        return this.$store.state.tasks
      },
      comments() {
        return this.$store.state.comments
      }

    },
    methods: {
      deleteTask() {
        this.$store.dispatch('deleteTask', this.taskData)
      }
    },
    components: {
      CommentForm,
      Comment
    }
  }
</script>


<style scoped>

</style>