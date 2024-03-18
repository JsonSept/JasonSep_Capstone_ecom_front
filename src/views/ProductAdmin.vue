<template lang="">
    <div>
    <h3>All Products</h3>
        <br><br>

        <p>Deluxe Café isn't just about drinks. The menu features a mouthwatering array of pastries, baked goods, and light bites, all made in-house with the finest ingredients. From flaky croissants to decadent cakes, there's something to satisfy every craving.</p>
        <br><br>
        <Spinner-comp v-if="loadingProducts" />
          <slot-comp>
            <div class="card">
                <table class="table table-striped">
                <tr>
                  <th class="">Product ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>price</th>
                  <th>Product</th>
                </tr>
                <tbody v-for="item in $store.state.products" :key="item.prodID">
                <td>{{item.prodID}}</td>
                <td>{{item.name}}</td>
                <td>{{item.description}}</td>
                <td>{{item.price}}</td>
                <td><img :src="item.image" alt="" height="80px" width="90px"></td>
                <td><button @click="deleteProduct(item.prodID)">Delete</button></td>
                <td><button @click="editProduct(item.prodID)">Edit</button></td>
            </tbody>
            
        </table>
            </div>
          </slot-comp>
        
    </div>
</template>

<script>
// import SlotComp from '@/components/CardSlots.vue'
// import Spinner from '@/components/Spinner.vue'
export default {
    data() {
      return {
        products:null,
        name:null,
        description:null,
        price:null,
        image:null

      };
    },
    methods: {
    
    },
    computed: {
      async getProducts(){
         await this.$store.dispatch('getProducts')
        },
     async getProduct() {
      await this.store.dispatch('getProduct')
    },
    
      },
    mounted() {
      this.getProducts,
      this.getProduct
   
    }
  };
  </script>
  
  <style scoped>
table{
  border: solid white 3px;
}
  tbody,td ,th{
    border: solid white 3px;
  }
  </style>
  