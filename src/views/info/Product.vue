<template>
  <div class="product">
    <h1>КАТАЛОГ ТОВАРОВ</h1>
    <div class="category__list">
      <router-link :to="item.link" v-for="item of typeProduct"> {{ item.name }} </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  computed: {
    typeProduct() {
       return this.$store.getters.getCatalog_v2
    }
  }
}
</script>

<style scoped>

</style>