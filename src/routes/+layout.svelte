<script lang="ts">
  import Theme from '@invitation-homes/svelte-ui/src/lib/Theme/Theme.svelte';
  import PageWrapper from '$lib/components/PageWrapper/index.svelte';
</script>

<svelte:head>
  <title>Dev Notes</title>
</svelte:head>

<Theme>
  <header>
    <h1>Dev Notes</h1>
    <nav>
      <ul>
        <li><a href="/accessibility">Accessibility</a></li>
        <li><a href="/css-variables">CSS Variables</a></li>
        <li><a href="/cypress-testing">Cypress Testing</a></li>
        <li><a href="/dev-efficiency">Developer Efficiency</a></li>
        <li><a href="/story-book">Storybook</a></li>
        <li><a href="/vscode">VS Code</a></li>
      </ul>
    </nav>
  </header>
  <PageWrapper>
    <slot />
  </PageWrapper>
</Theme>

<style>
  header {
    padding: 10px;
    background: var(--color-primary);
    color: var(--color-white);
  }

  a {
    color: var(--color-white);
  }

  li {
    list-style: none;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  @media (--tablet-min) {
    ul {
      display: flex;
      gap: 16px;
    }
  }
</style>
