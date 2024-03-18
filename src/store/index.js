import { createStore } from 'vuex'
import axios from 'axios'
import bootstrap from 'bootstrap'
const baseUrl = 'http://localhost:8076'


export default createStore({
  state: {
    products:null,
    users:null,
    loggedIn:false

   
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.products;
    },
    getUsers(state) {
      return state.users
    },
    deleteUser(state) {
      return state.users
    }
  },
  mutations: {
    setProducts(state,payload) {
      state.products = payload
    },
    setProduct(state,payload) {
      state.products = payload
    },
    setUsers(state,payload) {
      state.users = payload
    },
    setLogged(state,payload){
      state.loggedIn = payload
    }
  },
  actions: {
  async getProducts({commit}){
    let {data} = await axios.get(baseUrl+ '/products')
    commit('setProducts' , data)
  },
  async getProduct({commit}){
    let {data} = await axios.get(baseUrl+ '/products')
    commit('setProduct' , data)
  },
  async deleteProduct({commit}, name){
    let {data} = await axios.get(baseUrl+ '/products/'+ name)
    commit('setProduct' , data)
    window.location.reload()
  },
  login({commit},logins){
    axios.post(baseUrl+'/',logins)
    .then(res=> {
    })
  },




  //users
async getUsers({commit}){
  let {data} = await axios.get(baseUrl+'/users')
  commit('setUsers', data)
},

async registerUser({commit}, newUser){
  console.log(newUser);
  let {data} = await axios.post(baseUrl+'/users',newUser)
  alert(data.msg)
  window.location.reload()
 },
 async loginUser({commit}, currentUser){
  // console.log(user);
  let {data} = await axios.post(baseUrl+'/login',currentUser)
  $cookies.set('jwt',data.token)
  alert(data.msg)
  await router.push('/') 
  //push - keeps the browser histore of the visited page
  commit('setLogged',true)
  window.location.reload()
  
 },
 async logout(context){
  let cookies = $cookies.keys()
  console.log(cookies);
  $cookies.remove('jwt')
  window.location.reload()
  let {data} = await axios.delete(baseUrl + '/logout')
  alert(data.msg)
  
}




  },
  modules: {
  }
})