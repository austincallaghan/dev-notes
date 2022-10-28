<script lang="ts">
  import { page } from '$app/stores';
  import { safeEnv } from '$lib/utils/safe-env';

  const HOMEPAGE_URL = `https://www.${safeEnv('VITE_INVH_DOMAIN_NAME')}`;
  const errorCode = 404;
</script>

{#if $page.status === errorCode}
  <div class="not-found">
    <div class="background-image">
      <div class="title">Oops! No one seems to be home.</div>
      <div class="subtitle">We are sorry for the inconvenience but the page you're looking for can't be found.</div>
      <a class="homepage-anchor" href={HOMEPAGE_URL}>Go to homepage</a>
    </div>
  </div>
{:else}
  <div class="server-error">{$page.status} - {$page.error.message}</div>
{/if}

<style>
  .not-found {
    width: 100%;
    height: 100%;
  }

  .server-error {
    font-family: var(--font-primary);
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
  }

  .background-image {
    background: url(https://images.ctfassets.net/lb8pxg8729el/48hhNcFFou43vo5KPvODZt/987ae011c12d3cb21f83d7861b3c1671/404.jpg?fm=jpg&fl=progressive&q=60&f=bottom&);
    background-size: cover;
    min-height: calc(100vh);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    font-family: var(--font-secondary);
    font-size: 36px;
    font-weight: 700;
    line-height: 52px;
  }

  .subtitle {
    font-family: var(--font-primary);
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }

  .homepage-anchor {
    font-family: var(--font-primary);
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding: 12px 24px;
    color: var(--color-white);
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 4px;
    margin-top: 20px;
  }
</style>
