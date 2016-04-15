<template>
  <div class="cell" v-bind:class="{ 'selected': isSelected }" v-on:mouseover="previewColumn" v-on:mouseout="removePreview" v-on:click="selectColumn">
    <div class="active" v-if="isActive"></div>
    <div class="ghost" v-if="isGhost"></div>
  </div>
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

  .active {
    width: 30px;
    height: 30px;
    background: black;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border-radius: 15px;
    margin: 5px;
  }

  .ghost {
    width: 30px;
    height: 30px;
    border: 1px dotted black;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border-radius: 15px;
    margin: 5px;
  }
</style>
<script>
  import store from '../store';
  import dropIn from '../dropIn';

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
      isSelected() {
        return store.isSelected({
          row: this.row,
          col: this.col,
        });
      },
      isActive() {
        return store.isActive({
          row: this.row,
          col: this.col,
        });
      },
      isGhost() {
        return store.isGhost({
          row: this.row,
          col: this.col,
        });
      },
    },
    methods: {
      previewColumn() {
        dropIn.previewColumn(this.col);
      },
      removePreview() {
        dropIn.removePreview(this.col);
      },
      selectColumn() {
        dropIn.selectColumn(this.col);
      },
    },
  };
</script>
