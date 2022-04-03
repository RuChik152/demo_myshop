<template>
  <div class="catalog__list container">
    <h1>{{ $route.params.id }}</h1>
    <hr>
    <h1>{{ catalog_v2.name }}</h1>
    <router-link :to="{ name: 'name_category', params: { name: `${item.id}` } }" v-for="item of catalog_v2.category">{{ item.name }}</router-link>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Catalog",
  data(){
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    catalog_v2(){
      const data = this.$store.getters.getCatalog_v2;
      const dataFind = data.find((item) => item.id == this.id);
      return dataFind;
    }
  }
}
</script>

<style lang="scss">

.catalog__list {
  display: flex;
  flex-wrap: wrap;
}

.list__elem{
  width: 13vw;
  height: 7vh;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #dbc7be;
  &:hover {
    box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.10);
    background-color: #e0b8a7;
  }
}

</style>