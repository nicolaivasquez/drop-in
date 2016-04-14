<template>
  <div class="cell" v-bind:class="{ 'selected': isActive }" v-on:mouseover="previewColumn" v-on:mouseout="removePreview"></div>
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
      isActive() {
        return store.isSelected({
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
    },
  };
</script>
