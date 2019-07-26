<template>
  <div class="listForm">
    <div class="row justify-content-center mb-3">
      <form class="col-4 border border-secondary" @submit="createList">
        <label for="list">Name your list: </label>
        <input class="text-light bg-dark mt-1" type="text" name="list" id="list" placeholder="list title here"
          v-model="newList.title"><br>
        <label for="list">Task Yourself: </label>
        <input class="text-light bg-dark" type="text" name="list" id="list" placeholder="list content here"
          v-model="newList.content"><br>
        <button type="submit" class="btn btn-warning border border-light mb-3">Make list</button>
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
<!-- login JDHIRAHARA@GMAIL.COM PSW:123456 -->

<style scoped>

</style>