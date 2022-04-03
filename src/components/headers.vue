<template>
  <header>
    <div class="headers container d-flex jus-cont-spc-btw alg-itm">
      <router-link to="/"><img class="headers__img" src="img/logo.png"></router-link>
      <div class="headers__block">
        <router-link to="/cart"><img class="icon__cart" src="img/cart.png" alt="icon_cart"></router-link>
        <router-link to="/profile"><img class="icon__profile" src="img/profile.png" alt="icon_profile"></router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "headers"
}
</script>

<style lang="scss">

.headers__img {
  width: 18vw;
}

.headers__block{
  width: 7vw;
  display: flex;
  justify-content: space-between;
}

.icon__cart {
  width: 2vw;
}

.icon__profile{
  width: 2vw;
}
</style>