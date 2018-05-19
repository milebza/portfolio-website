<template>
  <div class="borders">
    <div v-show="isBorderVisible" class="c-border c-border__top u-hide--tablet"></div>
    <div v-show="isBorderVisible" class="c-border c-border__right u-hide--tablet"></div>
    <div v-show="isBorderVisible" class="c-border c-border__bottom u-hide--tablet"></div>
    <div v-show="isBorderVisible" class="c-border c-border__left u-hide--tablet"></div>
    <span @click="isBorderVisible = !isBorderVisible" class="c-border__toggle u-hide--tablet">{{ isBorderVisible ? 'hide' : 'show'}}</span>
  </div>
</template>

<script>
export default {
  name: 'Borders',
  data: () => ({
    isBorderVisible: true
  })
};
</script>
