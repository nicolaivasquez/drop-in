<template>
  <div class="cell"></div>
</template>
<style>
  .cell {
    width: 40px;
    height: 40px;
    display: inline-block;
    border: 1px solid black;
  }
</style>
<script>
  export default{
    props: [
      'row',
      'col',
    ],
    data() {
      return {
      };
    },
    components: {
    },
  };
</script>
