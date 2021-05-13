<template>
  <div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close mt-3">
        <span v-on:click="toggleMenu" class="icon-close2 js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body">
      <ul class="site-nav-wrap" @click="closeMenu">
        <nuxt-link
          v-for="item in menuItems"
          :key="item.id"
          tag="li"
          :to="item.link"
          exact
        >
          <a href="#" class="nav-link text-left">
            {{ item.title }}
          </a>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuItems: [
      { id: 1, title: "Home", link: "/" },
      { id: 2, title: "Categories", link: "/categories" },
      { id: 3, title: "Politics", link: "/blog" },
      { id: 4, title: "Business", link: "/categories" },
      { id: 5, title: "Health", link: "/categories" },
      { id: 6, title: "Design", link: "/categories" },
      { id: 7, title: "Sport", link: "/categories" },
      { id: 8, title: "Contact", link: "/contacts" },
    ],
  }),
  methods: {
    closeMenu(link) {
      this.$store.dispatch("menu/closeMenu");
    },
    toggleMenu() {
      this.$store.dispatch("menu/updateActive");
    },
  },
};
</script>