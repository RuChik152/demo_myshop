<template>
<div>
  <h1>Загрузился компонент => CatalogProductElement</h1>
  <h2>$route.params.id => {{ $route.params.id }}</h2>
  <h3>$route.params.name => {{ $route.params.name }}</h3>
  <div class="product">
    <div class="product__list" v-for="item of product">
      <div class="list__item" :data-id="item.id">
        <img class="item__img" :src="item.img">
        <div class="item__box">
          <p class="item__name">{{ item.title }}</p>
          <router-link :to="{name: 'product_page', params: {id: $route.params.id, name: $route.params.name, item_id: item.id,
          item: {
            id: item.id,
            img: item.img,
            title: item.title,
            price: item.price,
            desc: item.desc
          }
          }}">Обзор товара</router-link>
          <p class="item__desc">{{ item.desc }}</p>
          <p class="item__price">{{ item.price }}</p>
          <button class="item__button" v-on:click="buy(item)">Купить</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import catalogProductElementItem from "@/components/catalogProductElementItem";
export default {
  name: "CatalogProductElement",
  components: {
    catalogProductElementItem
  },
  data(){
    return {
      id: this.$route.params.id,
      name: this.$route.params.name
    }
  },
  computed: {
    product() {
      const data = this.$store.getters.getCatalog_v2;
      const dataFind = data.find((item) => item.id == this.$route.params.id);
      let arr = dataFind.category.find((item) => item.id == this.$route.params.name)
      return arr.product;
    }
  },
  methods:{
    buy(item){
      this.$store.dispatch('addToCart', item)
    }
  }
}
</script>

<style scoped>

</style>