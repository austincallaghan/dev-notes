<script lang="ts">
  import { safeEnv } from '$lib/utils/safe-env';
  import { onMount } from 'svelte';

  const GOOGLE_TAG_MANAGER_ID = safeEnv('VITE_GOOGLE_TAG_MANAGER_ID');
  const GOOGLE_TAG_MANAGER_AUTH = safeEnv('VITE_GOOGLE_TAG_MANAGER_AUTH');
  const GOOGLE_TAG_MANAGER_PREVIEW_ID = safeEnv('VITE_GOOGLE_TAG_MANAGER_PREVIEW_ID');

  export let path: string;

  onMount(() => {
    if (GOOGLE_TAG_MANAGER_ID.length) {
      const win = window as Window;
      win.dataLayer = win.dataLayer || [];
      win.gtag = function gtag() {
        win.dataLayer.push(arguments);
      };
      win.gtag('js', new Date());
      win.gtag('config', GOOGLE_TAG_MANAGER_ID, { send_page_view: false });
    }
  });

  $: if (typeof window !== 'undefined' && GOOGLE_TAG_MANAGER_ID.length) {
    const win = window as Window;
    if (win && typeof win.gtag !== 'undefined') {
      win.gtag('config', GOOGLE_TAG_MANAGER_ID, {
        page_path: path,
        gtm_preview: GOOGLE_TAG_MANAGER_PREVIEW_ID,
        gtm_auth: GOOGLE_TAG_MANAGER_AUTH,
      });
    }
  }
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtm.js?id={GOOGLE_TAG_MANAGER_ID}&gtm_auth={GOOGLE_TAG_MANAGER_AUTH}&gtm_preview={GOOGLE_TAG_MANAGER_PREVIEW_ID}"
  >
  </script>
</svelte:head>

<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id={GOOGLE_TAG_MANAGER_ID}&gtm_auth={GOOGLE_TAG_MANAGER_AUTH}&gtm_preview={GOOGLE_TAG_MANAGER_PREVIEW_ID}&gtm_cookies_win=x "
    height="0"
    width="0"
    style="display:none;visibility:hidden"
    title="gtm-profile-webapp"
  />
</noscript>

<style>
  iframe {
    width: 0;
  }
</style>
