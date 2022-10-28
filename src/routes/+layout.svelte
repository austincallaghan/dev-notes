<script lang="ts">
  import Theme from '@invitation-homes/svelte-ui/src/lib/Theme/Theme.svelte';
</script>

<svelte:head>
  <title>Svelte Starter - Invitation Homes</title>
</svelte:head>

<Theme>
  <header><h1>Default Layout Header</h1></header>
  <slot />
</Theme>

<style>
  header {
    padding: 16px;
    background: var(--color-primary);
    color: var(--color-white);
  }
</style>
