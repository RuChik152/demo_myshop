<template>
  <div class="main">
<!--    <product-item v-for="item in catalog_v2" v-bind:key="item.id" v-bind:data="item" >-->
<!--      <button v-on:click="buy(item)">Добавить</button>-->
<!--    </product-item>-->
    <div class="product__block container">
      <product-element class="block__container"  v-for="item in catalog_v2" v-bind:data="item"></product-element>
    </div>
  </div>
</template>

<script>
import productElement from "@/components/productElement";
import productItem from "@/components/productItem";
export default {
  name: "mains",
  components:{
    productItem,
    productElement
  },
  computed: {
    catalog(){
      return this.$store.getters.getCatalog;
    },
    catalog_v2(){
      return this.$store.getters.getCatalog_v2;
    }
  },
  methods: {
    buy(item){
      this.$store.dispatch('addToCart', item)
    }
  }
}
</script>

<style lang="scss">

.product__block {
  display: flex;

}

.block__container {
  display: flex;
  flex-wrap: wrap;
}

</style>