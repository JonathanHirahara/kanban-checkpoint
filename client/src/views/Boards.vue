<template>
  <div class="boards container">
    <div class="row justify-content-end">
      <button class=" logoutbutton btn btn-warning" @click=" logout">logout</button>
    </div>
    <h2> WELCOME TO THE BOARDS!!!</h2>
    <form @submit.prevent="addBoard">
      <input class="text-light bg-dark" type="text" placeholder="title" v-model="newBoard.title" required>
      <input class="text-light bg-dark" type="text" placeholder="description" v-model="newBoard.description">
      <button type="submit" class="btn btn-warning">Create Board</button>
    </form>
    <div v-for="board in boards" :key="board._id">
      <router-link :to="{name: 'board', params: {boardId: board._id}}">{{board.title}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "boards",
    mounted() {
      this.$store.dispatch("getBoards");
    },
    data() {
      return {
        newBoard: {
          title: "",
          description: ""
        }
      };
    },
    computed: {
      boards() {
        return this.$store.state.boards;
      }
    },
    methods: {
      addBoard() {
        this.$store.dispatch("addBoard", this.newBoard);
        this.newBoard = { title: "", description: "" };
      },
      logout() {
        this.$store.dispatch('logout')
      }
    }
  };
</script>