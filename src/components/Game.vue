<template>
  <div id="players">
    <player v-for="p in shared.start.players" v-bind:player="p"></player>
  </div>
  <div class="row" v-for="row in arr(shared.start.rows)">
    <cell v-for="col in arr(shared.start.columns)" v-bind:col="col" v-bind:row="row"></cell>
  </div>
</template>

<script>
import Cell from './Cell';
import Player from './Player';
import store from '../store';

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
  methods: {
    arr(count) {
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(i);
      }
      return arr;
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
</style>
