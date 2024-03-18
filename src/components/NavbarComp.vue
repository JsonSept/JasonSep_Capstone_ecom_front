<template>
    <div>
        <nav>
          <router-link to="/signup">Signup</router-link> |
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/store">Store</router-link> |
          <router-link to="/productAdmin">product Admin</router-link> |
              <router-link to="/userAdmin">User Admin</router-link> |

              <button v-if="$cookies.get('jwt')" @click="logout">Logout</button>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>