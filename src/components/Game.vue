<template>
  <div id="players">
    <player v-for="p in shared.start.players" v-bind:player="p"></player>
  </div>
  <button class="continue" v-show="isWinner" v-on:click="continue">Continue</button>
  <div class="row" v-for="row in arr(shared.start.rows)">
    <cell v-for="col in arr(shared.start.columns)" v-bind:col="col" v-bind:row="row"></cell>
  </div>
  <button v-on:click="reset">Reset</button>
</template>

<script>
import Cell from './Cell';
import Player from './Player';
import store from '../store';
import dropIn from '../dropIn';

export default {
  components: {
    Cell,
    Player,
  },
  data() {
    return {
      private: {},
      shared: store.state,
    };
  },
  computed: {
    isWinner() {
      return store.state.win.length > 0;
    },
  },
  methods: {
    arr(count) {
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(i);
      }
      return arr;
    },
    reset() {
      dropIn.reset();
    },
    continue() {
      dropIn.continue();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }

  .row {
    margin: 0;
  }

  #players {
    margin-bottom: 20px;
  }

  button {
    padding: 10px;
    margin-bottom: 10px;
  }

  .continue {
    background: darkseagreen;
  }
</style>
