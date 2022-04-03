
<template>
  <div>
    <div class="list__elem">
      <p>{{ $route.params.id }}</p>

      <router-link class="item__link" :to="{name: data.link, params: id }">{{ data.name }}</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "catalogItem",
  props: ['data'],
  data(){
    return {
      id: 1
    }
  }
}
</script>

<style scoped>

</style>