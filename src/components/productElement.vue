<template>
  <div>
    <div class="product" v-for="item of data.category">
      <div class="product__list" v-for="elem of item.product">
        <div class="list__item" :data-id="elem.id">
          <img class="item__img" :src="elem.img">
          <div class="item__box">
            <p class="item__name">{{ elem.title }}</p>
            <p class="item__desc">{{ elem.desc }}</p>
            <p class="item__price">{{ elem.price }}</p>
            <button class="item__button" v-on:click="buy(elem)">Купить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Элемент товара на общей странице
export default {
  name: "productElement",
  props:['data'],
  methods: {
    buy(elem){
      this.$store.dispatch('addToCart', elem)
    }
  }
}
</script>

<style lang="scss">

.product{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.product__list{
  display: flex;
  flex-wrap: wrap;
}

.list__item{
  width: 21vw;
  margin: 10px 0px;
  box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.15);
  .item__box{
    padding: 2% 2%;
  }
  .item__name {
    font-size: 17px;
    margin: 3px 0px;
  }
  .item__desc {
    font-size: 13px;
    margin: 3px 0px;
  }
  .item__price {
    font-size: 19px;
    margin: 3px 0px;
  }
  .item__img {
    width: 21vw;
  }
  .item__button {
    margin-top: 6px;
    font-size: 17px;
    padding: 7px 10px;
    border: none;
    border-radius: 3px;
    background-color: #d9d9d9;
    //transition: 0.3s ease-in;
    &:hover {
      background-color: #dbc7be;
    }
    &:active {
      background-color: #dcb29e;
    }
  }
}



</style>