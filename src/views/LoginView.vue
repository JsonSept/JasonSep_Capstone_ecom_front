<template>
    <!-- <div class="view">
        <h1>Login Page</h1>
        <input type="name" placeholder="name" name="name" required v-model="age">
        <br>
        <br>
        <input type="age" placeholder="age" name="age" required v-model="age">
        <br>
        <br>
        <button @click="submitData">Submit</button>
    </div> -->

    <div class="view" v-for="info in $store.state.friends" :key="info">
        <input type="name" placeholder="name"><br>
        <input type="age" placeholder="age"><br>
        <button @click="submitData">Submit</button>
        <h1>{{ info }}</h1>
    </div>
</template>
<script>
export default {
    computed: {
        login(){
        this.$store.dispatch('fetchData')
      },

    },
    mounted
}
//     data() {
//         return {
//             // email:'abs@gmail.pop',
//             // password:'yolo123',
//            name:'',
//            age:''
//         }
//     },
//     methods :{
//         // getData(){
//         //     console.log(this.$data);
//         //     this.$store.dispatch('login',this.$data)
//         // }
//         getFriends(){
//         const getFriends = async()=> {
//     const [result] = await pool.query(`
//         SELECT *
//         FROM buds
//     `)
// }
//     return result
// }
//     }
// }
</script>
<style>
    div {
        padding-top: 2px;
    }
    .view {
        background-color: rgb(64, 60, 60);
        border-radius: 10px;
        width: 400px;
        height : 190px;
        margin-left: 37%;
        margin-top: 8%;
    }
    @media screen and (max-width: 900px) {
    .view {
        background-color: rgb(64, 60, 60);
        border-radius: 10px;
        width: 400px;
        margin-left: 25%;

        height : 190px;
    }
}
</style>