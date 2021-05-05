<template>
  <div
    class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
    role="banner"
  >
    <div class="container">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <nav
            class="site-navigation position-relative text-right"
            role="navigation"
          >
            <ul
              class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block"
            >
              <li v-for="item in menuItems" :key="item.id">
                <nuxt-link :to="item.link" exact class="nav-link text-left">{{
                  item.title
                }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
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
};
</script>


<style lang="scss">
</style>