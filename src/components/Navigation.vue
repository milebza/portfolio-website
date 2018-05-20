<template>
  <div class="navigation">
    <div :class="{ 'u-hide--tablet': !isMenuOpen }">
        <div class="c-menu">
          <h1><router-link @click.native="toggleMenu" class="c-menu__home" to="/">Milena<br> Baeza</router-link></h1>
          <nav class="c_menu__nav" style="margin-top: 8em">
            <ul>
              <li class="c-menu__item"><router-link @click.native="toggleMenu" class="c-menu__link" active-class="c-menu__link--active" to="/" exact>about</router-link></li>
              <li class="c-menu__item"><router-link @click.native="toggleMenu" class="c-menu__link" active-class="c-menu__link--active" to="/what-can-i-do">what can I do</router-link></li>
              <li class="c-menu__item"><router-link @click.native="toggleMenu" class="c-menu__link" active-class="c-menu__link--active" to="/portfolio">portfolio</router-link></li>
              <li class="c-menu__item"><router-link @click.native="toggleMenu" class="c-menu__link" active-class="c-menu__link--active" to="/say-hi">say hi</router-link></li>
            </ul>
          </nav>
          <div @click="toggleMenu" class="c-menu__close u-hide--desktop" aria-label="Close menu"></div>
        </div>
      </div>
      <div @click="toggleMenu" class="c-menu__open u-hide--desktop" aria-label="Open menu">Menu</div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    isMenuOpen: false
  }),
  methods: {
    toggleMenu: function() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
};
</script>
