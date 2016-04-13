<template>
  <div class="row" v-for="row in arr(rows)">
    <div class="cell" v-for="col in arr(columns)"></div>
  </div>
</template>

<script>
export default {
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

.cell {
  width: 40px;
  height: 40px;
  display: inline-block;
  border: 1px solid black;
}

.row {
  margin: 0;
}
</style>
