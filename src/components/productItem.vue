<template>
    <div class="cart__product" :data-id="data.id">
      <img class="product__img" :src="data.img">
      <div class="product__textBox">
        <p class="product__name">{{ data.title }}</p>
        <p class="product__desc">{{ data.desc }}</p>
        <p class="product__price">$ {{ data.price }}</p>
      </div>
      <div class="product__box" v-if="data.quantity">
        <button class="product__button" v-on:click="down" v-if="data.quantity != 1"> - </button> <input class="product__input" type="text" v-model="quantity" min="1" disabled><button class="product__button" v-on:click="up"> + </button>
      </div>
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "productItem",
  props:['data'],
  computed: {
    quantity: {
      get(){
        return this.data.quantity;
      },
      set(value){
        this.$store.dispatch('setQuantity', {id: this.data.id, quantity: value})
      }
    }
  },
  methods: {
    down(){
        if(this.data.quantity != 1 ){
          this.data.quantity--;
          this.$store.dispatch('setQuantity', {id: this.data.id, quantity: this.data.quantity})
        }
    },
    up(){
        this.data.quantity++;
        this.$store.dispatch('setQuantity', {id: this.data.id, quantity: this.data.quantity})
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">

.cart__product{
  display: flex;
  width: 20vw;
  box-shadow: 0px 0px 13px 4px rgb(0 0 0 / 15%);
  flex-direction: column;
  align-items: center;
  .product__img {
    width: 100%;
  }
  .product__name{
    font-size: 17px;
    margin: 3px 0px;
  }
  .product__desc {
    font-size: 13px;
    margin: 3px 0px;
  }
  .product__price {
    font-size: 19px;
    margin: 3px 0px;
  }
  .product__box{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product__button {
    margin: 6px 0px;
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
  .product__input {
    margin: 0px 6px;
    width: 38px;
    height: 36px;
    text-align: center;
    border: none;
    background: none;
  }

}

.product__textBox {
  padding: 2% 2%;
}

</style>