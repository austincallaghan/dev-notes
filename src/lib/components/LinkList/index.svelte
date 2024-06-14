<script lang="ts">
  import List from '$lib/components/List/List.svelte';
  import ListItem from '$lib/components/List/ListItem.svelte';

  export let label;
  export let links: { label: string; href: string }[];
</script>

<h3>{label}</h3>

<List>
  {#each links as { label, href }}
    <ListItem>
      <a {href}>{label}</a>
    </ListItem>
  {/each}
</List>

<style>
  h3 {
    margin-bottom: 0;
  }
</style>
