<template>
  <div class="board">
    <h3>{{board.title}}</h3>
    <p>{{board.description}}</p>
  </div>

</template>
<script>
  //  import components here

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
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      }
    },
    methods: {

    },
    components: {

    },

  };
</script>