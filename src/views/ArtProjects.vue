<template>
  <section class="c-portfolio">
    <BackButton /><br><br>
    <ArtGallery/>
  </section>
</template>

<script>
import ArtGallery from '@/components/ArtGallery';
import BackButton from '@/components/BackButton';
export default {
  name: 'ArtProjects',
  components: {
    ArtGallery,
    BackButton
  }
}
</script>
