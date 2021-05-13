export const state = () => ({
  menuActive: false,
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
})

export const mutations = {
  setMenuAvtive(state) {
    state.menuActive = !state.menuActive
  },
  closeMenuActive(state) {
    state.menuActive = false
  }
}
export const actions = {
  closeMenu(ctx) {
    ctx.commit('closeMenuActive')
  },
  updateActive(ctx) {
    ctx.commit('setMenuAvtive')
  }
}
export const getters = {
  getMenuState(state) {
    return state.menuActive
  },
  getMenuItems(state) {
    return state.menuItems
  }
}