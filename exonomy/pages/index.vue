<template>
  <div>
    <nav>
      <DIDManager />
      <ThirdPartyAuthenticatorManager />
    </nav>
    <CarouselStorefront />
  </div>
</template>

<script>
import DIDManager from '../components/DIDManager.vue';
import ThirdPartyAuthenticatorManager from '../components/ThirdPartyAuthenticatorManager.vue';
import CarouselStorefront from '../components/CarouselStorefront.vue';

export default {
  components: {
    DIDManager,
    ThirdPartyAuthenticatorManager,
    CarouselStorefront,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
}

nav > * {
  margin-left: 20px;
}
</style>
