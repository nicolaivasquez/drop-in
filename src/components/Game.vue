<template>
  <div class="row" v-for="row in arr(private.rows)">
    <cell v-for="col in arr(private.columns)" v-bind:col="col" v-bind:row="row"></cell>
  </div>
</template>

<script>
import Cell from './Cell';
import store from '../store';

export default {
  components: {
    Cell,
  },
  data() {
    return {
      private: {
        rows: 6,
        columns: 6,
      },
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
</style>
