<template>
  <div class="boards container">
    <div class="row justify-content-end">
      <button class=" logoutbutton btn btn-warning border border-dark" @click="logout">logout</button>
    </div>
    <h2> Breaking Boards!</h2>
    <form @submit="addBoard">
      <label for="text">Board Title:</label>
      <input class="text-light bg-dark " type="text" placeholder="title" v-model="newBoard.title" required><br>
      <label for="text">Board Description:</label>
      <input class="text-light bg-dark " type="text" placeholder="description" v-model="newBoard.description"><br>
      <button type="submit" class="btn btn-warning border border-dark">Create Board</button>
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