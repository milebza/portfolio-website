<template>
  <div class="c-gallery">
    <VueTinySlider
      :items="1" :mode="'gallery'" :mouse-drag="true"
      :arrow-keys="true"
    >
        <div class="slide">
            <img src="../assets/nenufares.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/nenufares-02.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/journal-green.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/aquarium.jpg" alt="Photo of an artificial lake with fishes">
        </div>
        <div class="slide">
            <img src="../assets/lady-flower.jpg" alt="Collage of a woman's face covered with flowers">
        </div>
        <div class="slide">
            <img src="../assets/beach-black-yellow.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/beach-blue-yellow.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/journal-red.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/journal-yellow.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/journal-drawing-01.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/sea-sand-sunset.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/sea-sunset.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/journal-drawing-02.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/journal-france.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../assets/beach-blue-yellow-02.jpg" alt="">
        </div>
    </VueTinySlider>
    <p class="u-paragraph u-hide--desktop">[ swipe ]</p>
  </div>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider';
export default {
  name: 'ArtGallery',
  components: {
    VueTinySlider
  }
}
</script>
