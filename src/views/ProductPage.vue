<template>
  <div>
<!--    <h3>{{ $route.params.id }}</h3>-->
<!--    <h4>{{ $route.params.name }}</h4>-->
<!--    <h5>{{ $route.params.item_id }}</h5>-->
<!--    <p>{{ item.price }}</p>-->
<!--    <p>{{ item.title }}</p>-->
<!--    <img :src="item.img" alt="">-->
<!--    <p>{{ item.desc }}</p>-->
    <div class="product">
      <div class="product__list">
        <div class="list__item" :data-id="item.id">
          <img class="item__img" :src="item.img">
          <div class="item__box">
            <p class="item__name">{{ item.title }}</p>
            <p class="item__desc">{{ item.desc }}</p>
            <p class="item__price">{{ item.price }}</p>
            <button class="item__button" v-on:click="buy()">Купить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  props:{
    item: Object
  },
  methods:{
    buy(){
      this.$store.dispatch('addToCart', this.item)
    }
  }
}
</script>

<style scoped>

</style>