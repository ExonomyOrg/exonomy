<template>
  <div class="third-party-authenticator-manager">
    <button @click="toggleDropdown" class="third-party-authenticator-button" :disabled="!currentDID">
      <img :src="currentAuthenticator.avatar" alt="Avatar" class="avatar" />
      <span>{{ currentAuthenticator.username }}</span>
    </button>
    <div v-if="dropdownOpen" class="dropdown-menu">
      <div v-for="authenticator in authenticators" :key="authenticator.id" class="dropdown-item" @click="selectAuthenticator(authenticator)">
        <img :src="authenticator.avatar" alt="Avatar" class="avatar" />
        <span>{{ authenticator.username }}</span>
      </div>
      <div class="dropdown-item add-new" @click="addNewAuthenticator">
        <img src="/path/to/plus-icon.png" alt="Add New" class="avatar" />
        <span>... add new</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useThirdPartyAuthenticatorStore } from '../store/thirdPartyAuthenticator';
import { useDIDStore } from '../store/did';

export default {
  name: 'ThirdPartyAuthenticatorManager',
  setup() {
    const didStore = useDIDStore();
    const authenticatorStore = useThirdPartyAuthenticatorStore();
    const dropdownOpen = ref(false);

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value;
    };

    const selectAuthenticator = (authenticator) => {
      authenticatorStore.setCurrentAuthenticator(authenticator);
      dropdownOpen.value = false;
    };

    const addNewAuthenticator = () => {
      // Logic to add a new third-party authenticator
    };

    return {
      currentDID: didStore.currentDID,
      currentAuthenticator: authenticatorStore.currentAuthenticator,
      authenticators: authenticatorStore.authenticators,
      dropdownOpen,
      toggleDropdown,
      selectAuthenticator,
      addNewAuthenticator,
    };
  },
};
</script>

<style scoped>
.third-party-authenticator-manager {
  position: relative;
}

.third-party-authenticator-button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #f5f5f5;
}

.add-new {
  font-style: italic;
}
</style>
