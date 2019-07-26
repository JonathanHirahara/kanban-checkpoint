<template>
  <!-- boards have a list -->
  <div class="">
    <div class="row lists">
      <div class="col-4">
        <div class="card-body">
          <h5 class="card-title">{{listData.title}}</h5>
          <TaskForm :listId="listData._id"></TaskForm>
          <button class="btn btn-danger mb-2" @click.prevent="deleteList">Delete List</button>
          <Task v-if="task.content" v-for="task in tasks" :taskData="task"></Task>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TaskForm from '@/components/TaskForm'
  import Task from '@/components/Tasks'
  export default {
    name: 'List',
    props: ['listData'],
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch("getTasksByListId", this.listData._id)
    },
    computed: {
      lists() {
        return this.$store.state.lists
      },
      tasks() {
        return this.$store.state.tasks[this.listData._id] || []
      }
    },
    methods: {
      deleteList() {
        this.$store.dispatch('deleteList', this.listData)
      }
    },
    components: {
      TaskForm,
      Task
    }
  }
</script>

<style scoped>
</style>