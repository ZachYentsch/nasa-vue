<template>
  <div class="componet">
    <div class="row">
      <div class="col-10 m-3">
        <form @submit.prevent="searchImg()">
          <label for="nasa">Date:</label>
          <input type="date" class="form-control" v-model="date" />
        </form>
      </div>
      <div class="col-12">
        <Nasa v-for="n in nasa" :key="n.date" :nasa="n" />
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import { nasaService } from "../services/NasaService";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
export default {
  setup() {
    const date = ref("");
    return {
      async searchImg() {
        try {
          await nasaService.searchImg(date.value);
        } catch (error) {
          logger.log(error.message);
        }
      },
      date,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>