<template>
  <div class="cell" v-bind:class="{ 'selected': isSelected }" v-on:mouseover="previewColumn" v-on:mouseout="removePreview" v-on:click="selectColumn">
    <div class="active" v-show="isActive" transition="fade" v-bind:class="playerClass"></div>
    <div class="ghost" v-show="isGhost" transition="fade" v-bind:class="ghostClass"></div>
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
    background: grey;
  }

  .active {
    width: 30px;
    height: 30px;

    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border-radius: 15px;
    margin: 5px;
  }

  .playerA {
    background: red;
    border-color: red;
  }

  .playerB {
    background: blue;
    border-color: blue;
  }

  .ghost {
    width: 30px;
    height: 30px;
    border: 1px dotted;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border-radius: 15px;
    margin: 5px;
    opacity: 0.5;
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
      playerClass() {
        return store.cellPlayerClass({
          row: this.row,
          col: this.col,
        });
      },
      ghostClass() {
        return store.cellGhostClass({
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
        dropIn.selectColumn(this.col, this.row);
      },
    },
  };
</script>
