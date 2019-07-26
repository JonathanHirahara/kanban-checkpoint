<template>
  <!-- boards have a list -->
  <div class="col-4 lists">
    <div class="card-body border border-dark mb-2">
      <h5 class="card-title border border-dark mb-2">{{listData.title}}</h5>
      <TaskForm :listId="listData._id"></TaskForm>
      <button class="btn btn-danger border border-light text-dark m-1" @click="deleteList">Delete List</button>
      <div class="row">
        <drop class="drop" @drop="moveTask">
          <Task v-if="task.content" v-for="task in tasks" :taskData="task"></Task>
        </drop>
      </div>
    </div>
  </div>
</template>

<script>
  import TaskForm from '@/components/TaskForm'
  import Task from '@/components/Tasks'
  import { Drag, Drop } from 'vue-drag-drop';

  export default {
    name: 'List',
    props: ['listData', 'taskData'],
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
      },
      moveTask(data) {
        data.taskData.listId = this.listData._id
        this.$store.dispatch('moveTask', data)
      }
    },
    components: {
      TaskForm,
      Task,
      Drop
    }
  }
</script>

<style scoped>
</style>