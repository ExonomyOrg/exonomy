<template>
  <div class="signin-container">
    <h1>Sign In</h1>
    <form @submit.prevent="signIn">
      <div class="form-group">
        <label for="did">DID</label>
        <input type="text" id="did" v-model="did" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import { useDIDStore } from '@/store/did';

export default {
  data() {
    return {
      did: '',
      password: '',
    };
  },
  methods: {
    async signIn() {
      const didStore = useDIDStore();
      try {
        await this.$didAuth.signIn(this.did, this.password);
        didStore.setCurrentDID(this.did);
        this.$router.push('/');
      } catch (error) {
        console.error('Failed to sign in:', error);
      }
    },
  },
};
</script>

<style scoped>
.signin-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
