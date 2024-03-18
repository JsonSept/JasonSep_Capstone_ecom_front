<template>
    <div>
        <input type="firstname" firstname="firstname" placeholder="firstname" v-model="firstname"><br><br>
        <input type="lastname" lastname="lastname" placeholder="lastname" v-model="lastname"><br><br>
        <input type="email" name="email" placeholder="email" v-model="email"><br><br>
        <input type="password" name="password" placeholder="password" v-model="password"><br><br>
        <button @click="submitData">SignUp</button>
        {{ $store.state.loggedIn }}
        <button @click="loginUser">Login</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            firsname:null,
            lastname:null,
            email:null,
            password:null
        }
    },
    computed: {
        registerUser(){
            
            this.$store.dispatch("registerUser",this.$data)
        },
        loginUser(){
            this.$store.dispatch('loginUser',this.$data)
        }
    },
    methods : {
        submitData(){
            console.log(this.$data);
            this.$store.dispatch('login',this.$data)
        }
    }
}
</script>
<style>
    
</style>