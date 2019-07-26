<template>
  <div class="row">
    <div class="board col-12">
      <div class="logout">
        <button @click="home">Home</button>
        <button @click="logout" class="btn btn-warning">logout</button>
      </div>
      <h3>{{board.title}}</h3>
      <p>{{board.description}}</p>
      <ListForm></ListForm>
      <div>
        <button @click="deleteBoard">Delete Board</button>
      </div>
      <!-- <List :listData=''></List> -->
      <div class="row">
        <list v-for="list in lists" :listData="list"></list>

      </div>
    </div>
  </div>

</template>
<script>
  //  import components here
  import ListForm from '@/components/createList'
  import List from '@/components/List'
  import router from '../router'

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
      },
      home() {
        router.push({ name: 'boards' })
      }
    },
    components: {
      ListForm,
      List
    },

  };
</script>