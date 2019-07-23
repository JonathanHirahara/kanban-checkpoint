<template>
  <div class="listForm">
    <div class="row justify-content-center">
      <form class="col-3" @submit.prevent="createList">
        <label for="list">Make List?</label>
        <input type="text" name="list" id="list" placeholder="list title here" v-model="newList.title">
        <input type="text" name="list" id="list" placeholder="list content here" v-model="newList.content">
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