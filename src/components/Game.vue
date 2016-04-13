<template>
  <div class="row" v-for="row in arr(rows)">
    <cell v-for="col in arr(columns)" v-bind:col="col" v-bind:row="row"></cell>
  </div>
</template>

<script>
import Cell from './Cell';

export default {
  components: {
    Cell,
  },
  data() {
    return {
      rows: 6,
      columns: 6,
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
