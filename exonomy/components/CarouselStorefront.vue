<template>
  <div class="carousel-storefront">
    <div class="carousel-container">
      <div
        v-for="(app, index) in tenantApps"
        :key="index"
        class="carousel-item"
      >
        <img :src="app.icon" :alt="app.name" />
        <h3>{{ app.name }}</h3>
        <p>{{ app.description }}</p>
      </div>
    </div>
    <button @click="prev">Previous</button>
    <button @click="next">Next</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useTenantAppsStore } from '../store/tenantApps';

export default {
  setup() {
    const tenantAppsStore = useTenantAppsStore();
    const tenantApps = ref(tenantAppsStore.tenantApps);
    const currentIndex = ref(0);

    const prev = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      }
    };

    const next = () => {
      if (currentIndex.value < tenantApps.value.length - 1) {
        currentIndex.value++;
      }
    };

    return {
      tenantApps,
      currentIndex,
      prev,
      next,
    };
  },
};
</script>

<style scoped>
.carousel-storefront {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-container {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.carousel-item {
  flex: 0 0 auto;
  width: 100%;
  text-align: center;
}

button {
  margin: 10px;
}
</style>
