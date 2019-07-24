<template>
  <!-- boards have a list -->
  <div class="lists">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{listData.title}}</h5>
        <button class="btn btn-danger" @click.prevent="deleteList">Delete List</button>
        <!-- task tag -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: ['listData'],
    data() {
      return {}
    },
    mounted() {

    },
    computed: {
      lists() {
        return this.$store.state.lists
      }
    },
    methods: {
      deleteList() {
        this.$store.dispatch('deleteList', this.listData)
      }
    }
  }
</script>

<style scoped>
</style>