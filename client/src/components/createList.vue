<template>
  <div class="listForm">
    <div class="row">
      <form class="col-3" @submit.prevent="createList">
        <label for="list">Make List?</label>
        <input type="text" name="list" id="list" placeholder="list items here" v-model="newList.title">
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
        newList: {}
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