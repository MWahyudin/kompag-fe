<template>
 <div class="d-flex flex-column">
      <!-- <h1></h1> -->
      <div class="d-flex justify-content-center mt-12">
        <ring-loader v-show="loading" :color="color" :size="size"></ring-loader>
      </div>
      <!-- <pulse-loader  :color="color" :size="size"></pulse-loader> -->
    </div>
  <!-- <pulse-loader  :color="color" :size="size"></pulse-loader> -->
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import RingLoader from "vue-spinner/src/RingLoader.vue";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
export default {
  data() {
    return {
      color: "#cc181e",
      color1: "#5bc0de",
      size: "150px",
      margin: "10px",
      radius: "200px",
      loading: true
    };
  },
  components: {
    PulseLoader,
    RingLoader,
    BounceLoader
  }
};
</script>

<style></style>
