<template>

  <div class="home">
    
</div>


    
</template>

<script>


export default {
  props: {
    
  },
  data() {
      return {
        products:null,
      };
    },
    methods: {
    
    },
    computed: {
      async getProducts(){
         await this.$store.dispatch('getProducts')
        },
     async getproduct() {
      await this.store.dispatch('getProduct')
    },
    async deleteProduct() {
        await this.$store.dispatch('')
    }
      },
    mounted() {
      this.getProducts
      this.getProduct
      this.deleteProduct
    }
  };
</script>
