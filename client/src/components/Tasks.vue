<template>

  <!-- test comment cheese -->
  <div class="col-12 tasks text-light bg-secondary">
    <drag class="drag" :transfer-data="{taskData, oldListId: taskData.listId}">
      <div class=" row justify-content-center ">
        <div class="col-12 justify-content-center ">
          <div class="card border border-dark text-light bg-secondary" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-light bg-dark">{{taskData.content}}:</li>
            </ul>
            <button class=" btn btn-danger border text-dark border-light " @click="deleteTask">Delete Task</button>
            <CommentForm :listId="taskData.listId" :taskId="taskData._id"></CommentForm>
            <Comment v-for="comment in comments" :commentData="comment"></Comment>
          </div>
        </div>
      </div>
    </drag>
  </div>
</template>

<script>
  import CommentForm from '@/components/CommentForm'
  import Comment from '@/components/Comment'
  import { Drag, Drop } from 'vue-drag-drop';

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
        return this.$store.state.comments[this.taskData._id]
      }

    },
    methods: {
      deleteTask() {
        this.$store.dispatch('deleteTask', this.taskData)
      }
    },
    components: {
      CommentForm,
      Comment,
      Drag
    }
  }
</script>


<style scoped>

</style>