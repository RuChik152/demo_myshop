<template>
    <div class="info">
      <div class="container d-flex jus-cont-spc-btw">
        <div class="info__bar">
          <router-link to="/info_pay">Оплата</router-link> /
          <router-link to="/delivery">Доставка</router-link>
        </div>
        <div class="info__contact">
          <p class="email">name@name.name</p> /
          <router-link to="/contact">Контакты</router-link> /
          <router-link to="/about">О компании</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "infoUpBar"
}
</script>

<style lang="scss">
@import "~@/assets/sass/variables.scss";
.info {
  background-color: $grey;
  padding: 1vh;
}

.info__bar{
  width: 11vw;
  display: flex;
  justify-content: space-between;
}

.info__contact {
  display: flex;
  width: 26vw;
  justify-content: space-between;
}

</style>