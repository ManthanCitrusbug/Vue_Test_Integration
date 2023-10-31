<template>
    <div class="container">
        <h2>Login</h2>
        <div class="login-form">
            <div class="error-message" v-if="wrongCreds">Please check your email or password.</div> <br>
            <form novalidate autocomplete="off" @submit.prevent="login">
                <label for="username">UserName</label> <br>
                <input type="text" name="username" v-model="loginData.username"> <br>
                <div class="error-message" v-if="usernameError">Please Enter your Username.</div> <br>
                <label for="password">Password</label> <br>
                <input type="password" name="password" v-model="loginData.password"> <br>
                <div class="error-message" v-if="passwordError">Please Enter your password.</div> <br> <br>
                <button>Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import APIService from '../services/APIs';
import router from '@/router';

const API = new APIService();

export default {
    name: "LoginView",
    data() {
        return {
            loginData: {
                username: "",
                password: "",
            },
            usernameError: false,
            passwordError: false,
            wrongCreds: false,
        }
    },
    methods: {
        async login() {
            let loggedInUser;
            this.usernameError = (this.loginData.username === "");
            this.passwordError = (this.loginData.password === "");

            if(!this.usernameError && !this.passwordError){
                loggedInUser = await API.loginUser(this.loginData);
            }

            if (loggedInUser) {
                this.$store.dispatch('setLoggedInUser', {...loggedInUser, password: this.loginData.password});
                router.push('/home');
            }
            
        }
    }
}
</script>

<style>

</style>