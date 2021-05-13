<template>
  <div v-bind:class="{ 'offcanvas-menu': menuState }">
    <!-- elements-mobile-menu  -->
    <elements-mobile-menu />
    <!-- /.elements-mobile-menu -->

    <div class="header-top">
      <div class="container">
        <div class="row align-items-center">
          <!-- elements-logo  -->
          <elements-logo />
          <!-- /.elements-logo -->

          <!-- elements-social-list  -->
          <elements-social-list />
          <!-- /.elements-social-list  -->

          <div class="col-6 d-block d-lg-none text-right"></div>
        </div>
      </div>

      <!-- elements-header-menu   -->
      <elements-header-menu />
      <!-- /.elements-header-menu   -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menuState: function () {
      return this.$store.getters["menu/getMenuState"];
    },
  },
};
</script>
