<template>
  <div class="board">
    <h3>{{board.title}}</h3>
    <p>{{board.description}}</p>
  </div>

</template>

<script>
  export default {
    name: "board",
    data() {
      return {}
    },
    mounted() {
      let dataToSend = {
        boardId: this.$route.params.boardId
      }
      this.$store.dispatch('getBoardById', dataToSend)
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      }
    },
    props: ["boardId"]


  };
</script>