<template>
  <div class="did-manager">
    <button @click="toggleDropdown" class="did-manager-button">
      <img :src="currentDID.avatar" alt="Avatar" class="avatar" />
      <span>{{ currentDID.username }}</span>
    </button>
    <div v-if="dropdownOpen" class="dropdown-menu">
      <div v-for="did in dids" :key="did.id" class="dropdown-item" @click="selectDID(did)">
        <img :src="did.avatar" alt="Avatar" class="avatar" />
        <span>{{ did.username }}</span>
      </div>
      <div class="dropdown-item add-new" @click="addNewDID">
        <img src="/path/to/plus-icon.png" alt="Add New" class="avatar" />
        <span>... add new</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useDIDStore } from '../store/did';

export default {
  name: 'DIDManager',
  setup() {
    const didStore = useDIDStore();
    const dropdownOpen = ref(false);

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value;
    };

    const selectDID = (did) => {
      didStore.setCurrentDID(did);
      dropdownOpen.value = false;
    };

    const addNewDID = () => {
      // Logic to add a new DID
    };

    return {
      currentDID: didStore.currentDID,
      dids: didStore.dids,
      dropdownOpen,
      toggleDropdown,
      selectDID,
      addNewDID,
    };
  },
};
</script>

<style scoped>
.did-manager {
  position: relative;
}

.did-manager-button {
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
