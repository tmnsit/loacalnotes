<template>
  <div class="col-12 col-lg-6 d-flex">
    <nuxt-link to="/" class="site-logo"> Meranda </nuxt-link>
    <a
      v-on:click.prevent="toggleMenu"
      href="#"
      class="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
      ><span class="icon-menu h3"></span
    ></a>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.dispatch("menu/updateActive");
    },
  },
};
</script>