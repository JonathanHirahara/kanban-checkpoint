<template>
  <div class="board">
    <h3>{{board.title}}</h3>
    <p>{{board.description}}</p>
    <ListForm></ListForm>
    <!-- <List :listData=''></List> -->
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

    },
    components: {
      ListForm,
      List
    },

  };
</script>