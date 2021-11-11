<template>
  <div class="container py-3">
    <div class="row d-flex">
      <div class="col-9 mb-4">
        <div class="card h-100 bg-dark text-light border-secondary">
          <div class="card-body d-flex justify-content-around">
            <button
              @click="decreaseTemperature"
              class="btn btn-outline-danger touch-action-manipulation"
            >
              -
            </button>
            <span class="h3">{{ targetTemperature.toFixed(2) }} °C</span>
            <button
              @click="increaseTemperature"
              class="btn btn-outline-success touch-action-manipulation"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div class="col-3 mb-4">
        <div class="card h-100 bg-dark text-light border-secondary">
          <div class="card-body d-flex justify-content-around">
            <button
              @click="setTargetTemperature"
              class="btn btn-outline-primary touch-action-manipulation"
            >
              Ok
            </button>
          </div>
        </div>
      </div>

      <div class="col-12 mb-4 col-md-6">
        <div class="card h-100 bg-dark text-light border-secondary">
          <div class="card-body d-flex justify-content-around">
            <span class="h3">{{ temperature.toFixed(2) }} °C</span>
          </div>
        </div>
      </div>

      <div class="col-12 mb-4 col-md-6">
        <div class="card bg-dark text-light border-secondary">
          <div class="card-body d-flex justify-content-around">
            <button
              v-if="isHeating"
              @click="toggleHeating"
              class="btn btn-outline-success touch-action-manipulation"
            >
              Açık
            </button>
            <button
              v-else
              @click="toggleHeating"
              class="btn btn-outline-danger touch-action-manipulation"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetTemperature: 12,
      temperature: 11.9,
      isHeating: false,
    };
  },
  methods: {
    decreaseTemperature() {
      this.targetTemperature -= 0.5;
    },
    increaseTemperature() {
      this.targetTemperature += 0.5;
    },
    setTargetTemperature() {
      // :)
      this.temperature = this.targetTemperature;
    },
    toggleHeating() {
      this.isHeating = !this.isHeating;
    },
  },
};
</script>
