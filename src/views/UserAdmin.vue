<template>
    <div class="contain">
        <table class="table table-striped-columns">
            <tr>
              <th>User profile</th>
              <th>User ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
            
            <tbody v-for="item in $store.state.users" :key="item.userID">
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="dark" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
            </td>
            <td>{{item.userID}}</td>
            <td>{{item.firstname}}</td>
            <td>{{item.lastname}}</td>
            <td>{{item.email}}</td>
            <td>{{item.password}}</td>
            <!-- <td><img :src="item.image" alt="" height="80px" width="90px"></td> -->
            <td><button  @click="deleteUser(item.userID)">Delete</button></td> 

            
             <td><button class="bi bi-pencil" title="Edit user" @click="editUser(users)" data-bs-toggle="modal" data-bs-target="#exampleModal4">Edit</button></td>
            
            </tbody>
        </table>
    </div>




</template>
<script>


export default {
    components: {
    
  },
    data(){
        return {
            users:null,
            firstname:null,
            lastname:null,
            email:null,
            password:null,
        }
    },

    methods: {
    showModal() {
      const modalElement = this.$refs.modal.$el;
      $(modalElement).modal('show');
    },
  },
    computed: {
        async getUsers(){
            await this.$store.dispatch('getUsers')
        },
        async editUser(){
            // try {
            //     this.$store.dispatch('editUser')
            // }
        }
        // async deleteUser() {
        //     await this.$store.dispatch('getUser')
        // }
    },
    mounted() {
        this.getUsers,
        this.deleteUser
    }
}
</script>
<style>


th {
    font-size: 10px;
}
    td {
        font-size: 8px;
        width: 0.1%;
         white-space: wrap;
    }
</style>