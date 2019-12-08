<template>
  <section class="c-portfolio">
    <BackButton />
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
