<template>
  <div class="board">
    <div class="logout">
      <button @click="logout">logout</button>
    </div>
    <h3>{{board.title}}</h3>
    <p>{{board.description}}</p>
    <ListForm></ListForm>
    <button class="btn btn-danger" @click="deleteBoard">DEL</button>
    <list v-for="list in lists" :listData="list"></list>
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