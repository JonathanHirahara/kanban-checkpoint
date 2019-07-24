<template>
  <div class="tasks">
    <!-- lists have tasks -->
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{taskData.content}}</li>
      </ul>
      <button class=" btn btn-danger" @click.prevent="deleteTask">Delete Task</button>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'Tasks',
    props: ['taskData'],
    data() {
      return {}
    },
    computed: {
      tasks() {
        return this.$store.state.tasks
      }
    },
    methods: {
      deleteTask() {
        this.$store.dispatch('deleteTask', this.taskData)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>