<template>
  <div class="taskForm">
    <div class="row justify-content-center">

      <form class="col-3" @submit.prevent="createTask">
        <label for="task">Enter Task</label>
        <input class="text-light bg-dark" type="text" name="task" id="task" placeholder="Enter Task"
          v-model="newTask.content">
        <button class="btn btn-success">Submit Task</button>
      </form>

    </div>

  </div>

  </div>
</template>


<script>
  export default {
    name: 'TaskForm',
    props: ['listId'],
    data() {
      return {
        newTask: {

          boardId: this.$route.params.boardId,
          authorId: this.$store.state.user._id,
          listId: this.listId
        }
      }
    },
    computed: {},
    methods: {
      createTask() {
        this.$store.dispatch('createTask', this.newTask)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>