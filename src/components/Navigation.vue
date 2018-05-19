<template>
  <div class="navigation">
    <div class="u-hide--tablet">
        <div class="c-menu">
          <h1><router-link class="c-menu__home" to="/">Milena<br> Baeza</router-link></h1>
          <nav class="c_menu__nav" style="margin-top: 8em">
            <ul class="u-hide--tablet">
              <li class="c-menu__item"><router-link class="c-menu__link" to="/">about</router-link></li>
              <li class="c-menu__item"><router-link class="c-menu__link" to="/what-can-i-do">what can i do</router-link></li>
              <li class="c-menu__item"><router-link class="c-menu__link" to="/portfolio">portfolio</router-link></li>
              <li class="c-menu__item"><router-link class="c-menu__link" to="/say-hi">say hi</router-link></li>
            </ul>
          </nav>
          <div class="c-menu__close u-hide--desktop" aria-label="Close menu"></div>
        </div>
      </div>
      <div class="c-menu__open u-hide--desktop" aria-label="Open menu">Menu</div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    isMenuOpen: false
  })
};
</script>
