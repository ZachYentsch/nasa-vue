<template>
  <div class="col-10">
    <div class="card m-2 shadow">
      <img :src="nasa.img" class="rounded-top selectable" alt="" />
      <div class="card-body">
        <h2>{{ nasa.title }}</h2>
        <p class="clip-text">{{ movie.explanation }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  props: {
    nasa: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      searchedNasa: computed(() =>
        AppState.searchedNasa.find((i) => i.date == props.nasa.date)
      ),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>