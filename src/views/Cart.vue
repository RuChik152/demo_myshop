<template>
  <div class="main">
    <h1>Корзина</h1>
    <div class="cart__box container">
      <product-item v-for="item of cart" v-bind:key="item.id" v-bind:data="item">
        <button class="product__button" v-on:click="remove(item.id)">Удалить</button>
      </product-item>
    </div>
  </div>
</template>

<script>
import productItem from "@/components/productItem";
export default {
  name: "Cart",
  components:{
    productItem
  },
  computed: {
    cart(){
      return this.$store.getters.getCart
    }
  },
  methods: {
    remove(id){
      this.$store.dispatch('removeFromCart', id)
    }
  }
}
</script>

<style lang="scss">

.cart__box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.button__cart-action {
  display: flex;
}

</style>