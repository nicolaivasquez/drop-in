<template>
  <div class="player" v-bind:class="{ 'active': isActive }">
    Player {{ player }}
  </div>
</template>
<style scoped>

  .player {
    width: 40%;
    display: inline-block;
  }

  .active {
    border-bottom: 4px solid grey;
  }

</style>
<script>
  import store from '../store';

  export default{
    props: [
      'player',
    ],
    data() {
      return {
        private: {
          A: 0,
          B: 1,
        },
        shared: store.state,
      };
    },
    computed: {
      turnNumber() {
        return this.private[this.player];
      },
      isActive() {
        return store.isActivePlayer(this.turnNumber);
      },
    },
  };
</script>
