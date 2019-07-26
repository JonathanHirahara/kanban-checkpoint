<template>
  <div class="listForm">
    <div class="row justify-content-center">
      <form class="col-4" @submit.prevent="createList">
        <label for="list">Name your list: </label>
        <input class="text-light bg-dark" type="text" name="list" id="list" placeholder="list title here"
          v-model="newList.title"><br>
        <label for="list">Take Yourself: </label>
        <input class="text-light bg-dark" type="text" name="list" id="list" placeholder="list content here"
          v-model="newList.content"><br>
        <button type="submit" class="btn btn-warning">Make list</button>
      </form>
    </div>

  </div>
</template>




<script>
  export default {
    name: 'listForm',
    data() {
      return {
        newList: {
          boardId: this.$route.params.boardId,
          authorId: this.$store.state.user._id
        }
      }
    },
    computed: {},
    methods: {
      createList() {
        this.$store.dispatch('createList', this.newList)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>