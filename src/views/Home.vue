<template>
  <div class="main">
    <div class="main__box">
      <router-link v-for="item of catalog_v2" class="catalog" :to="{ name: `catalog`, params: {id: `${item.link}`} }">{{ item.name }}</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
import productItem from "@/components/productItem";
export default {
  name: "Home",
  components: {
    productItem
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

.category{
  display: flex;
}

.main__box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.catalog {
  font-size: 23px;
  padding: 7px 9px;
  border-radius: 2px;
  background-color: #d9d9d9;
  &:hover {
    background-color: #dbc7be;
  }
  &:active {
    background-color: #dcb29e;
  }
}

</style>