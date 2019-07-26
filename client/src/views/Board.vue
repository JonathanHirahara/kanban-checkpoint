<template>
  <div class="container">
    <div class="board col-12 ">
      <div class="logout d-flex justify-content-end">
        <button @click="logout" class="btn btn-warning">logout</button>
      </div>
      <h3>{{board.title}}</h3>
      <p>{{board.description}}</p>
      <ListForm></ListForm>
      <!-- <List :listData=''></List> -->
      <list v-for="list in lists" :listData="list"></list>
    </div>

  </div>

</template>
<script>
  //  import components here
  import ListForm from '@/components/createList'
  import List from '@/components/List'
  export default {
    name: "board",
    props: ["boardId"],
    data() {
      return {}
    },
    mounted() {
      let dataToSend = {
        boardId: this.$route.params.boardId

      }
      this.$store.dispatch('getBoardById', dataToSend)
      this.$store.dispatch('getListsByBoardId', this.$route.params.boardId)
      this.$store.dispatch('getBoards')
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      },
      lists() {
        return this.$store.state.lists
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      },
      deleteBoard() {
        this.$store.dispatch('deleteBoard', this.boardId)
      }
    },
    components: {
      ListForm,
      List
    },

  };
</script>