<template>
  <div class="cell" v-bind:class="{ 'selected': isActive }"></div>
</template>
<style>
  .cell {
    width: 40px;
    height: 40px;
    display: inline-block;
    border: 1px solid black;
  }

  .selected {
    background: red;
  }
</style>
<script>
  import store from '../store';

  export default{
    props: [
      'row',
      'col',
    ],
    data() {
      return {
        private: {

        },
        shared: store.state,
      };
    },
    components: {
    },
    computed: {
      isActive() {
        return store.isSelected({
          row: this.row,
          col: this.col,
        });
      },
    },
  };
</script>
