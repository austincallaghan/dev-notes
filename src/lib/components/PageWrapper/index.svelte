<script>
</script>

<section>
  <slot />
</section>

<style>
  section {
    margin: 0;
    padding: 16px;
  }

  @media (--tablet-min) {
    section {
      margin: 0 auto;
      max-width: 600px;
    }
  }

  @media (--desktop-min) {
    section {
      max-width: 1000px;
    }
  }
</style>
