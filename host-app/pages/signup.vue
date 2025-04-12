<template>
  <div class="signup-container">
    <h1>Sign Up</h1>
    <form @submit.prevent="signUp">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="did">DID</label>
        <input type="text" id="did" v-model="did" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { useDIDStore } from '@/store/did';

export default {
  data() {
    return {
      username: '',
      did: '',
      password: '',
    };
  },
  methods: {
    async signUp() {
      const didStore = useDIDStore();
      try {
        await this.$didAuth.signUp(this.username, this.did, this.password);
        didStore.addDID({ username: this.username, did: this.did });
        this.$router.push('/signin');
      } catch (error) {
        console.error('Failed to sign up:', error);
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
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
